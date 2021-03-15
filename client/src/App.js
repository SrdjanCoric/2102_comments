import React, { useEffect, useState } from "react";
import Comments from "./components/Comments";
import CommentForm from "./components/CommentForm";
import data from "./lib/comments";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data);
  }, []);
  return (
    <div>
      <Comments comments={comments} />
      <CommentForm />
    </div>
  );
}

export default App;
