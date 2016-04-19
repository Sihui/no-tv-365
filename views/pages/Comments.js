import React from "react"

import CommentStore from "../stores/CommentStore";
import Comment from "../components/Comment";
import * as CommentActions from "../actions/CommentActions";

export default class Comments extends React.Component{

  constructor() {
    super();
    this.getComments = this.getComments.bind(this);
    this.state = {
      comments: CommentStore.getAllComments(),
    };
  }

  componentWillMount(){
    CommentStore.on("change", this.getComments);
  }

  componentWillUnmount() {
    CommentStore.removeListener("change", this.getComments);
  }

  getComments() {
    this.setState({
      comments: CommentStore.getAllComments(),
    });
  }

  render(){

    const Comments = this.state.comments.map((comment) => {
      return <Comment key={comment.id} {...comment}/>;
    });
    return(
      <div>
        {Comments}
      </div>
      );
  }
}

module.exports = Comments;
