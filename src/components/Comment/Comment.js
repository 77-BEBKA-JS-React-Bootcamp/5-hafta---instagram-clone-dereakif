import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getComments, addComment } from "./../../store/actions/actions";
import "./Comment.css";

const Comment = (props) => {
  const [photoUrl, setPhotoUrl] = useState();
  const [newComment, setNewComment] = useState({});
  const dispatch = useDispatch();
  const location = useLocation();
  const comments = useSelector((state) => state.commentsReducer.data);

  useEffect(() => {
    dispatch(addComment());
    dispatch(getComments());
    setPhotoUrl(location.state);
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment(newComment));
  };
  return (
    <div>
      <div className="center">
        <div className="navbar">
          <button>
            <img
              className="camera"
              src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png"
              alt="camera"
              width="15%"
            />
          </button>

          <img
            className="insta"
            src="https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"
            alt="logo"
            width="25%"
          />
          <button>
            <img
              className="send"
              src="https://pngimage.net/wp-content/uploads/2018/06/send-button-icon-png-6.png"
              alt="dm"
            />{" "}
          </button>
        </div>
        <div className="profile">
          <img className="main-img" src={photoUrl} alt="images" />
          {comments.name ||
            comments.body ||
            (comments &&
              comments.map((comment, i) => (
                <p key={i} className="photo-info">
                  <span>{comment.name}</span> {comment.body}
                </p>
              )))}
          <form onSubmit={handleSubmit}>
            <input
              onChange={(event) =>
                setNewComment({ name: "Username", body: event.target.value })
              }
              value={newComment.body}
            />
            <button type="submit">Add new comment</button>
          </form>
        </div>

        <div className="navbar2">
          <Link to="/">
            <img className="bar" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Comment;
