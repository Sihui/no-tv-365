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
            <script type="text/javascript" src="client.min.js"></script>
          </body>
        </html>
    );
  }

});
