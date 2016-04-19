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
          <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
            <title>No TV 365</title>
          </head>
          <body>
            <div className="jumbotron vertical-center-parent">
              <div id="app" data={name + "|" + fb_id} className="container"></div>
            </div>
            <script src="/main.js"></script>
          </body>
        </html>
    );
  }
});
//          <link rel="stylesheet" type="text/css" href="style.css"/>

//<form action = "/login/facebook" method = "post">
//  <input type="submit" name="Login" value="Login" />
//</form>
//<p>{fb_id} - {name}</p>

