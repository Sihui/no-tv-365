import React from "react";

import * as CommentActions from "../actions/CommentActions";

export default class Input extends React.Component{

  createComment(){
    var newComment = document.getElementById('new-comment').value;
    CommentActions.createComment(newComment);
  }

  render(){
    return(
      <div>
        <input id="new-comment"></input>
        <button onClick={this.createComment.bind(this)}>Create!</button>
      </div>
      );
  }
}

module.exports = Input;
