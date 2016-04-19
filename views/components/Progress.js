import React from "react"
import ProgressStore from "../stores/ProgressStore";
import * as ProgressActions from "../actions/ProgressActions";

export default class Progress extends React.Component{
  constructor() {
    super();
    this.getProgress = this.getProgress.bind(this);
    this.state = {
      progress: ProgressStore.getProgress(),
    };
    ProgressActions.getProgress();
  }

  getProgress(){
    console.log("getProgress");
    this.setState({
      progress: ProgressStore.getProgress(),
    });
    console.log("getProgress end p:"+this.state.progress);

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
        Progress: {this.state.progress}/365
      </div>
      );
  }
}

module.exports = Progress;
