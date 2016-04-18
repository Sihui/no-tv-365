import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById("app");
//var comments = app.props.comments;
//console.log("in main,js comments: " + comments);
ReactDOM.render(<Layout />, app);