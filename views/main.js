import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById("app");
var data = app.getAttribute("data").split("|");
var name = data[0];
var fb_id = data[1];
//var comments = app.props.comments;
//console.log("in main,js comments: " + comments);
ReactDOM.render(<Layout name={name} fb_id={fb_id}/>, app);