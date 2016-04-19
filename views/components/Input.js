import React from "react";

import * as CommentActions from "../actions/CommentActions";

export default class Input extends React.Component{

  createComment(){
    var text = document.getElementById('new-comment').value;
    var name = this.props.name;
    var fb_id = this.props.fb_id;
    CommentActions.createComment(text, name, fb_id);
  }

  render(){

    var name = this.props.name;
    var fb_id = this.props.fb_id;

    if(name!=="undefined"){
      var c_class = "";
      var textarea_style = {};
      var login_msg = "login_hide";
    }else{
      var c_class = "blur";
      var textarea_style = {pointerEvents: "none"};
      var login_msg = "login_show";
    }
    return(
      <div className="comment_div">
        <div className={login_msg}>
        <a href="/login/facebook"><img className="login_img" src="/imgs/facebook-login-blue.png"/></a>
        </div>
        <div className={c_class}>
          <textarea id="new-comment" style={textarea_style} className="form-control comment-area"></textarea>
          <button onClick={this.createComment.bind(this)} className="btn btn-primary" type="button">Comment</button>
        </div>
      </div>
      );
  }
}

module.exports = Input;
//,backgroundColor:" #b3b3cc"
