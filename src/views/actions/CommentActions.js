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