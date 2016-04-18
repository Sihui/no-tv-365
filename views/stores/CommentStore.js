import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class CommentStore extends EventEmitter {
  constructor() {
    super()
    this.comments = [
     {date:"Mar14", comment:"1", key:"1"},
     {date:"Mar14", comment:"2", key:"2"},
     {date:"Mar14", comment:"3", key:"3"},
     {date:"Mar14", comment:"4", key:"4"},
    ]
  }

  getAll(){
    return this.comments;
  }

  createComment(comment){
    const id = Date.now();

    this.comments.push({
      comment,
      id,
      date: "April 15"
    })
    this.emit("change");
  }

  handleActions(action) {
    switch(action.type){
      case "CREATE_COMMENT": {
        this.createComment(action.comment);
      }
    }
  }

}

const commentStore = new CommentStore;
dispatcher.register(commentStore.handleActions.bind(commentStore));
window.dispatcher = dispatcher;
export default commentStore;

window.commentStore = commentStore;
//commentStore.on("change", )