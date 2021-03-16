import React from "react";
import Comment from "./Comment";

const CommentThread = ({ comment, onMoreReplies }) => {
  const handleMoreReplies = (e) => {
    e.preventDefault();
    onMoreReplies(comment.id);
  };
  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div className="replies">
        {comment.replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        {comment.replies_count === comment.replies.length ? null : (
          <a href="#" onClick={handleMoreReplies} className="show_more">
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;
