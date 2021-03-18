import * as types from "../../constants/ActionTypes";

const comments = (state = [], action) => {
  switch (action.type) {
    case types.COMMENTS_RECEIVED:
      // action {type: "COMMENTS_RECEIVED", payload: {comments}}
      return action.payload.comments.map((comment) => {
        const { replies, ...commentWithoutReplies } = comment;
        return commentWithoutReplies;
      });
      return action.payload.comments.reduce((acc, comment) => {
        const { replies, ...commentWithoutReplies } = comment;
        return acc.concat(commentWithoutReplies);
      }, []);
    case types.COMMENT_ADDED:
      // { type: types.COMMENT_ADDED, payload: { newComment } };
      return state.concat(action.payload.newComment);
    default:
      return state;
  }
};

export default comments;

/*
[  {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 3,

  },
  {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 3,

  },
  {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 3,

  },]
*/
