var React = require('react');
var ReactDOMServer = require('react-dom/server');

module.exports = React.createClass({
  render: function() {
    if(this.props.name){
     var fb_id = this.props.fb_id;
     var name = this.props.name.replace("|", " ");
    }
    return (
        <html>
          <head>
          <link rel="stylesheet" href="/stylesheets/style.css" />
          <link rel="stylesheet" href="/stylesheets/bootstrap.css" />
          <script src="/javascripts/info.js"></script>

          <title>No TV 365</title>
          </head>
          <body>
            <div className="jumbotron vertical-center-parent">
              <div id="app" data={name + "|" + fb_id} className="container"></div>
            </div>
            <script src="/javascripts/pretty-json/jquery-1.11.1.min.js"></script>
            <script src="/javascripts/pretty-json/underscore-min.js"></script>
            <script src="/javascripts/pretty-json/backbone-min.js"></script>
            <script src="/javascripts/pretty-json/pretty-json-min.js"></script>
            <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
            <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
            <script src="/main.js"></script>
          </body>
        </html>
    );
  }
});