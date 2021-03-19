import { connect } from "react-redux";
import CommentForm from "./CommentForm";
import { addComment } from "../actions/commentActions";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (newComment, callback) => {
      dispatch(addComment(newComment, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(CommentForm);
