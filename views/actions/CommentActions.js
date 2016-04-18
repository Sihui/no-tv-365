import dispatcher from "../dispatcher";

export function createComment(comment) {
  dispatcher.dispatch({
    type: "CREATE_COMMENT",
    comment,
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