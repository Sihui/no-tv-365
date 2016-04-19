import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById("app");
var data = app.getAttribute("data").split("|");
var name = data[0];
var fb_id = data[1];
//var comments = app.props.comments;
//console.log("in main,js comments: " + comments);
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-76618743-1', 'auto');
ga('send', 'pageview');

ReactDOM.render(<Layout name={name} fb_id={fb_id}/>, app);