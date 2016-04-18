import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";



module.exports = function () {
  console.log("in client.js");

  const app = document.getElementById("app")
  ReactDOM.render(<Layout/>, app);
};