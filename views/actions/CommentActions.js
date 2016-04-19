import dispatcher from "../dispatcher";

export function createComment(text, name, fb_id) {
  $.ajax({
    type: 'POST',
    url: '/api/comments',
    data: {
    fb_id: fb_id,
    text: text,
    name: name,
    date: Date.now()}
  })
    .done(() => {
      console.log("create comment success")
      dispatcher.dispatch({
        type: "CREATE_COMMENT"
      });
    })
    .fail((jqXhr) => {
      console.log("create comment fail");
    });
}

export function deleteComment(id) {
  dispatcher.dispatch({
    type: "DELETE_COMMENT",
    id,
  });
}

export function getAllComments(){
  $.ajax({
    type: 'GET',
    url: '/api/comments',
  })
    .done((comments) => {
      console.log("get all success, comments:" + comments)
      dispatcher.dispatch({
        type: "GET_ALL_COMMENTS",
        comments,
      });
    })
    .fail((jqXhr) => {
      console.log("get all fail");
    });
}