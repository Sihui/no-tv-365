import React from "react"

import Comments from "../pages/Comments"
import Input from "./Input"

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <Input />
        <Comments />
      </div>
      );
  }
}