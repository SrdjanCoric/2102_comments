import React from "react";
import CommentThreadContainer from "./CommentThreadContainer";

class Comments extends React.Component {
  componentDidMount() {
    this.props.onFetchComments();
  }
  render() {
    return (
      <div className="comments">
        <h2>Comments ({this.props.comments.length})</h2>
        {this.props.comments.map((comment) => {
          return <CommentThreadContainer key={comment.id} comment={comment} />;
        })}
      </div>
    );
  }
}

// const Comments = ({ onMoreReplies }) => {
//   const dispatch = useDispatch();

//   const comments = useSelector((state) => state.comments);

//   useEffect(() => {
//     dispatch(commentsReceived());
//   }, []);
//   // action.payload.comments

// };

export default Comments;
