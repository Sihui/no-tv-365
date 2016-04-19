import React from "react"
import ProgressStore from "../stores/ProgressStore";
import * as ProgressActions from "../actions/ProgressActions";

export default class Progress extends React.Component{
  constructor() {
    super();
    this.getProgress = this.getProgress.bind(this);
    this.progress = 0;
    ProgressActions.getProgress();
  }

  getProgress(){
    this.progress = ProgressStore.getProgress();
  }

  componentWillMount(){
    ProgressStore.on("progress_change", this.getProgress);
  }

  componentWillUnmount() {
    ProgressStore.removeListener("progress_change", this.getProgress);
  }

  render(){
    return(
      <div className="tv-progress">
        Progress: {this.progress} / 365
      </div>
      );
  }
}

module.exports = Progress;
