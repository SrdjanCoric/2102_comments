import * as types from "../constants/ActionTypes";
import apiClient from "../lib/ApiClient";

export const commentsReceivedSuccess = (comments) => {
  return { type: types.COMMENTS_RECEIVED, payload: { comments } };
};

export const addCommentSuccess = (newComment) => {
  return { type: types.COMMENT_ADDED, payload: { newComment } };
};

export const commentsReceived = () => {
  return (dispatch) => {
    apiClient.getComments((comments) => {
      dispatch(commentsReceivedSuccess(comments));
    });
  };
};

export const addComment = (newComment, callback) => {
  return (dispatch) => {
    apiClient.addComment(newComment, (commentFromServer) => {
      dispatch(addCommentSuccess(commentFromServer));
      callback();
    });
  };
};
