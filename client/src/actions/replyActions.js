import * as types from "../constants/ActionTypes";

export const addReplies = (replies, commentId) => {
  return { type: types.REPLIES_RECEIVED, payload: { replies, commentId } };
};
