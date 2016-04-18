var React = require('react');
var ReactDOMServer = require('react-dom/server');

module.exports = React.createClass({

  render: function() {
    var comments = this.props.comments;
    console.log("in Html comments" + comments);
    return (
        <html>
          <head>
          <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
            <title>No TV 365</title>
          </head>
          <body>
            <div id="app" comments={comments}></div>
            <script src="/main.js"></script>
          </body>
        </html>
    );
  }
});