import React, { useEffect, useState } from "react";
import axios from "axios";
import Comments from "./components/Comments";
import CommentForm from "./components/CommentForm";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("/api/comments")
      .then((res) => res.data)
      .then((comments) => {
        setComments(comments);
      });
  }, []);

  const handleMoreReplies = (id) => {
    axios
      .get(`/api/comment_replies?comment_id=${id}`)
      .then((res) => res.data)
      .then((replies) => {
        const newComments = comments.map((comment) => {
          if (comment.id === id) {
            return Object.assign({}, comment, {
              replies: comment.replies.concat(replies),
            });
          } else {
            return comment;
          }
        });
        setComments(newComments);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (newComment, callback) => {
    axios
      .post("/api/comments", newComment)
      .then((res) => res.data)
      .then((newComment) => {
        setComments(comments.concat(newComment));
        callback();
      });
  };
  return (
    <div>
      <Comments onMoreReplies={handleMoreReplies} comments={comments} />
      <CommentForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
