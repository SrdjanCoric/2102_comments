import axios from "axios";
import * as routes from "../constants/ApiRoutes";

const apiClient = {
  getComments: function (callback) {
    axios
      .get(routes.GET_COMMENTS_URL)
      .then((res) => res.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  getReplies: function (id, callback) {
    axios
      .get(routes.getRepliesUrl(id))
      .then((res) => res.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  addComment: function (newComment, callback) {
    axios
      .post(routes.POST_COMMENT_URL, newComment)
      .then((res) => res.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
};

export default apiClient;
