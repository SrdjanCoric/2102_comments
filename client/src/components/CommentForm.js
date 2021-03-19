import React from "react";

class CommentForm extends React.Component {
  state = {
    author: "",
    body: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { author: this.state.author, body: this.state.body };
    this.props.onSubmit(newComment, this.resetInputs);
  };

  resetInputs = () => {
    this.setState({ author: "" });
    this.setState({ body: "" });
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h2>Post a Comment</h2>
        <div className="input-group">
          <label htmlFor="author">Your Name</label>
          <input
            id="author"
            type="text"
            name="author"
            value={this.state.author}
            onChange={(e) => this.setState({ author: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label htmlFor="body">Your Comment</label>
          <textarea
            id="body"
            name="body"
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={(e) => this.setState({ body: e.target.value })}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CommentForm;
