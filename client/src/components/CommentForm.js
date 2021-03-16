import React from "react";
import useInput from "../hooks/useInput";

const CommentForm = ({ onSubmit }) => {
  const { value: author, reset: resetAuthor, bind: bindAuthor } = useInput("");
  const { value: body, reset: resetBody, bind: bindBody } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ author, body }, resetInputs);
  };
  const resetInputs = () => {
    resetAuthor();
    resetBody();
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label>Your Name</label>
        <input type="text" {...bindAuthor} name="author" />
      </div>

      <div className="input-group">
        <label>Your Comment</label>
        <textarea name="body" cols="30" rows="10" {...bindBody}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
