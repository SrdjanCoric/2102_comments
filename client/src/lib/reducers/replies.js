import * as types from "../../constants/ActionTypes";

const replies = (state = [], action) => {
  switch (action.type) {
    case types.COMMENTS_RECEIVED:
      // action {type: "COMMENTS_RECEIVED", payload: {comments}}
      return action.payload.comments.reduce((acc, comment) => {
        const { replies } = comment;
        return acc.concat(replies);
      }, []);
    case types.REPLIES_RECEIVED:
      return state.concat(action.payload.replies);
    default:
      return state;
  }
};

export default replies;
