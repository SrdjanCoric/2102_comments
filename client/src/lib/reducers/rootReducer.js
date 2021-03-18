import comments from "./comments";
import replies from "./replies";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ comments, replies });

// const rootReducer = (state = {}, action) => {
//   return {
//     comments: comments(state.comments, action),
//     replies: replies(state.replies, action),
//   };
// };

export default rootReducer;
