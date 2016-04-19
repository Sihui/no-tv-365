import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import * as ProgressActions from "../actions/ProgressActions";

class ProgressStore extends EventEmitter {
  constructor() {
    super()
    this.progress = 0;
  }

  getProgress(){
    return this.progress;
  }

  handleActions(action) {
    switch(action.type){
      case "GET_PROGRESS":
        console.log('action'+action);
        console.log('action'+action.progress.progress);
        this.progress = action.progress.progress;
        this.emit("progress_change");
        break;
    }
  }

}

const progressStore = new ProgressStore;
dispatcher.register(progressStore.handleActions.bind(progressStore));
window.dispatcher = dispatcher;
export default progressStore;

window.progressStore = progressStore;
//commentStore.on("change", )