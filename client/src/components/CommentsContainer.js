import { connect } from "react-redux";
import Comments from "./Comments";
import { commentsReceived } from "../actions/commentActions";

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchComments: () => {
      dispatch(commentsReceived());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
