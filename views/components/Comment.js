import React from "react"

export default class Comment extends React.Component{

  constructor(props) {
    super();
  }

  render(){
    const { date, text } = this.props;

    return(
      <div className="card">
        <div className="card-block">
          <p className="card-text">{text}</p>
        </div>
      </div>
      );
  }
}

module.exports = Comment;
