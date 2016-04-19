import dispatcher from "../dispatcher";

export function getProgress() {
  $.ajax({
    type: 'GET',
    url: '/api/progress'
  })
    .done((progress) => {
      console.log("get progress success")
      dispatcher.dispatch({
        type: "GET_PROGRESS",
        progress
      });
    })
    .fail((jqXhr) => {
      console.log("get progress fail");
    });
}