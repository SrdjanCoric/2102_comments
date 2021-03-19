import React from "react";
import Comment from "./Comment";

const CommentThread = ({ comment, replies, onMoreReplies }) => {
  const handleMoreReplies = (e) => {
    e.preventDefault();
    let id = comment.id;
    onMoreReplies(id);
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
