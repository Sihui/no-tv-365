import React from "react"

export default class Comment extends React.Component{

  constructor(props) {
    super();
  }

  render(){
    const { date, time, text, name, fb_id } = this.props;
    console.log("name:"+name)
    var imgurl = "https://graph.facebook.com/" + fb_id + "/picture?type=square";
    var formatted_name = name;
    if(name){
      var split_name = name.split(" ");
      if(split_name.length >= 2)
        formatted_name = split_name[0] + " " + split_name[split_name.length-1][0]+'.'
    }
    return(
      <div className="card">
        <div className="card-block">
          <p className="card-text">{text}</p>
          <p className="card-name">-{formatted_name} @{time} {date} <img className="thubmnail" src={imgurl}/></p>
        </div>
      </div>
      );
  }
}

module.exports = Comment;
