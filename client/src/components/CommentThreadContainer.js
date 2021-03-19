import { connect } from "react-redux";
import CommentThread from "./CommentThread";
import { addReplies } from "../actions/replyActions";

const mapStateToProps = (state, ownProps) => {
  return {
    replies: state.replies.filter(
      (reply) => reply.comment_id === ownProps.comment.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoreReplies: (id) => {
      dispatch(addReplies(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentThread);
