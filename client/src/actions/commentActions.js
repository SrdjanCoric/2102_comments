import * as types from "../constants/ActionTypes";

export const commentsReceived = (comments) => {
  return { type: types.COMMENTS_RECEIVED, payload: { comments } };
};

export const addReplies = (replies, commentId) => {
  return { type: types.REPLIES_RECEIVED, payload: { replies, commentId } };
};

export const addComment = (newComment) => {
  return { type: types.COMMENT_ADDED, payload: { newComment } };
};
