var express = require("express");
var reactViews = require('express-react-views');

var app = express();
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

const comment = {fb_id:1234, text: "good job!", date: Date.now(), fb_pic:"111"}

app.get("/", function(request, response) {
  response.render('Html');
});

app.get('/api/comments', function(req, res, next) {
  console.log("inside /api/comments");
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    dbGetAllComments(db,  function(comments) {
      console.log("returned comments")
      console.dir(comments);
      db.close();
      res.send(comments);
    })
  });
});

app.post('/api/comments', function(req, res){
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
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

var dbInsertComment = function(comment, db, callback) {
  var collection = db.collection('comments');
  // Insert some documents
  collection.insertOne(comment, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.ops.length);
    console.log("Inserted 1 comment into the comment collection");
    callback(result);
  });
}

var dbGetAllComments = function(db, callback) {
    var collection = db.collection('comments');
    collection.find({}).toArray(function(err, docs){
      console.log("Found the following records");
      console.dir(docs);
      callback(docs);
    })
  }