import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import useInput from "../hooks/useInput";
import { addComment } from "../actions/commentActions";

const CommentForm = () => {
  const { value: author, reset: resetAuthor, bind: bindAuthor } = useInput("");
  const { value: body, reset: resetBody, bind: bindBody } = useInput("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { author, body };
    axios
      .post("/api/comments", newComment)
      .then((res) => res.data)
      .then((newComment) => {
        dispatch(addComment(newComment));
        resetInputs();
      });
  };

  const resetInputs = () => {
    resetAuthor();
    resetBody();
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label htmlFor="author">Your Name</label>
        <input id="author" type="text" {...bindAuthor} name="author" />
      </div>

      <div className="input-group">
        <label htmlFor="body">Your Comment</label>
        <textarea
          id="body"
          name="body"
          cols="30"
          rows="10"
          {...bindBody}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
