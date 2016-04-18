var express = require("express");
var reactViews = require('express-react-views');

var app = express();
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.get("/", function(request, response) {
  response.render('Html',{});
});

var port = process.env.PORT || 9000;
app.listen(port, function () {
  console.log('Example app listening on port 9000!');
});