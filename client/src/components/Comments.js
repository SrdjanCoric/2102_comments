import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CommentThread from "./CommentThread";
import { commentsReceived } from "../actions/commentActions";

const Comments = ({ onMoreReplies }) => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    axios
      .get("/api/comments")
      .then((res) => res.data)
      .then((comments) => {
        dispatch(commentsReceived(comments));
      });
  }, []);
  // action.payload.comments

  return (
    <div className="comments">
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment) => {
        return (
          <CommentThread
            key={comment.id}
            comment={comment}
            onMoreReplies={onMoreReplies}
          />
        );
      })}
    </div>
  );
};

export default Comments;
