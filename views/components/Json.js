import React from "react"

export default class Json extends React.Component{

  componentDidMount(){
    console.log('add json');
    var node = new PrettyJSON.view.Node({
      el:$('#Json-info'),
      data:info
    });
    //node.expandAll();
    console.log('done json');
  }
  constructor() {
    super();
  }

  render(){
    console.log('render json');
    return (<div id="Json-info" className="Json-info"></div>);

  }
}

module.exports = Json;
