import React from "react"

export default class Comment extends React.Component{

  constructor(props) {
    super();
  }

  render(){
    const { date, text } = this.props;

    return(
      <li>{text} - {date}</li>
      );
  }
}

module.exports = Comment;
