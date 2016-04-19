import React from "react"

import Comments from "../pages/Comments"
import Input from "./Input"
import Cal from "./Cal"
import Progress from "./Progress"
import Json from "./Json"
import ga from './Ga'
export default class Layout extends React.Component {
  render(){
    var ga = require('react-google-analytics');
    var GAInitiailizer = ga.Initializer;

    var name = this.props.name;
    var fb_id = this.props.fb_id;
    return (
      <div>
        <Json />
        <Cal/>
        <Progress/>
        <Input name={name} fb_id={fb_id}/>
        <Comments/>
        <div>
          // SNIP
            <GAInitiailizer />
          // SNIP
        </div>
      </div>
      );
  }
}

module.exports = Layout;