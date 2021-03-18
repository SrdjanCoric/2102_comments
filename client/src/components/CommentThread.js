import React from "react";
import axios from "axios";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { addReplies } from "../actions/replyActions";

const CommentThread = ({ comment }) => {
  const dispatch = useDispatch();

  const replies = useSelector((state) => state.replies).filter(
    (reply) => reply.comment_id === comment.id
  );
  const handleMoreReplies = (e) => {
    e.preventDefault();
    let id = comment.id;
    axios
      .get(`/api/comment_replies?comment_id=${id}`)
      .then((res) => res.data)
      .then((replies) => {
        dispatch(addReplies(replies, id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div data-testid="replies" className="replies">
        {replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        {comment.replies_count === replies.length ? null : (
          <a href="#" onClick={handleMoreReplies} className="show_more">
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;
