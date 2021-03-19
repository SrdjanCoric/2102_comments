import * as types from "../constants/ActionTypes";
import apiClient from "../lib/ApiClient";

export const addRepliesSuccess = (replies, commentId) => {
  return { type: types.REPLIES_RECEIVED, payload: { replies, commentId } };
};

export const addReplies = (id) => {
  return (dispatch) => {
    apiClient.getReplies(id, (replies) => {
      dispatch(addRepliesSuccess(replies, id));
    });
  };
};
