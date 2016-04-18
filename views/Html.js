var React = require('react');
var ReactDOMServer = require('react-dom/server');

module.exports = React.createClass({

  render: function() {
    return (
        <html>
          <head>
            <title>No TV 365</title>
          </head>
          <body>
            <div id="app">page showing</div>
            <script src="/main.js"></script>
          </body>
        </html>
    );
  }

});
