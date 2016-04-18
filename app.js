var express = require("express");
var reactViews = require('express-react-views');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./configuration/config');
var session = require('express-session')

var app = express();
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: config.session_secret,
  cookie: { maxAge: 60000,httpOnly: false },
  resave: false,
  saveUninitialized: false,
}))

var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

const comment = {fb_id:1234, text: "good job!", date: Date.now(), fb_pic:"111"}

app.get("/", function(request, response) {
  if (request.session.fb_info){
    console.log("session found! : "+ request.session.fb_info);
  }
  console.log("session : "+ request.session);
  response.render('Html');
});

passport.use(new FacebookStrategy({
    clientID: config.facebook_app_id,
    clientSecret: config.facebook_app_secret,
    callbackURL: config.callback_url
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
    }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login/facebook' }),
  function(req, res) {
    var session = require('crypto').createHash('sha1').update(req.user.id+Date.now()).digest('hex');
    var user = {fb_id:req.user.id, name:req.user.displayName, session:session}
    console.log("USER:" + user)
    //save hash to session and database
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      dbInsertUser(user, db,  function() {
        console.log("save seesion");
        req.session.fb_info = session;
        console.log("session: " + req.session.fb_info);
        db.close();
        res.redirect('/');
      })
    });

  });

app.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  req.session.fb_info = null;
  res.redirect('/');
});

app.get('/api/comments', function(req, res, next) {
  //console.log("inside /api/comments");
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    // console.log("Connected correctly to server");
    dbGetAllComments(db,  function(comments) {
      // console.log("returned comments")
      // console.dir(comments);
      db.close();
      res.send(comments);
    })
  });
});

app.post('/api/comments', function(req, res){
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    // console.log("Connected correctly to server");
    dbInsertComment(req.body, db,  function() {
      db.close();
      res.send(req.body);
    })
  });
});

var port = process.env.PORT || 9000;
app.listen(port, function () {
  console.log('Example app listening on port 9000!');
});

var dbInsertUser = function(user, db, callback){
  console.log("About to insert new user:" + user.fb_id + " name: "+ user.name + " session: "+ user.session)
  var collection = db.collection('users');
  collection.count({fb_id: user.fb_id}, function (err, count){
      if(count>0){
          console.log("user exists");
          //document exists });
          collection.updateOne({ fb_id : user.fb_id }
            , { $set: { name:user.name, session:user.session} }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated user data");
            callback(result);
          });
      }else{
        collection.insertOne(user, function(err, result) {
          assert.equal(err, null);
          assert.equal(1, result.ops.length);
          console.log("Inserted 1 user into the users collection");
          callback(result);
        });
      }
  });
}

var dbInsertComment = function(comment, db, callback) {
  var collection = db.collection('comments');
  // Insert some documents
  collection.insertOne(comment, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.ops.length);
    // console.log("Inserted 1 comment into the comment collection");
    callback(result);
  });
}

var dbGetAllComments = function(db, callback) {
    var collection = db.collection('comments');
    collection.find({}).toArray(function(err, docs){
      // console.log("Found the following records");
      // console.dir(docs);
      callback(docs);
    })
  }