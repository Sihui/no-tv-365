import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import * as CommentActions from "../actions/CommentActions";

class CommentStore extends EventEmitter {
  constructor() {
    super()
    this.comments = []
    CommentActions.getAllComments();
  }

  assignComments(comments){
    this.comments = comments;
    this.emit("change");
  }

  getAllComments(){
    return this.comments;
  }

  createComment(comment){
    CommentActions.getAllComments();
  }

  handleActions(action) {
    switch(action.type){
      case "CREATE_COMMENT":
        this.createComment(action.comment);
        break;
      case "GET_ALL_COMMENTS":
        this.assignComments(action.comments);
        break;
    }
  }

}

const commentStore = new CommentStore;
dispatcher.register(commentStore.handleActions.bind(commentStore));
window.dispatcher = dispatcher;
export default commentStore;

window.commentStore = commentStore;
//commentStore.on("change", )