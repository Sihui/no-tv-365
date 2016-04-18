import React from "react"

export default class Comment extends React.Component{

  constructor(props) {
    super();
  }

  render(){
    const { date, comment } = this.props;

    return(
      <li>{comment} - {date}</li>
      );
  }
}