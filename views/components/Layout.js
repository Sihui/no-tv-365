import React from "react"

import Comments from "../pages/Comments"
import Input from "./Input"
import Cal from "./Cal"
import Progress from "./Progress"

export default class Layout extends React.Component {
  render(){

    var name = this.props.name;
    var fb_id = this.props.fb_id;
    return (
      <div>
        <Cal/>
        <Progress/>
        <Input name={name} fb_id={fb_id}/>
        <Comments/>
      </div>
      );
  }
}

module.exports = Layout;