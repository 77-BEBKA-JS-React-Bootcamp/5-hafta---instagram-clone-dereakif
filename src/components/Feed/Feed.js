import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "./../../store/actions/actions";
import "./Feed.css";
const Feed = () => {
  const [photoId, setPhotoId] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhoto());
  }, []);
  const photos = useSelector((state) => state.photosReducer.data);

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
          {/*  {photos && JSON.stringify(photos)} */}
          {photos.length > 0 &&
            photos.map((photo, index) => (
              <>
                <p className="photo-info">{photo.author}</p>
                <Link to={{ pathname: "/comment", state: photo.download_url }}>
                  <img
                    key={index}
                    src={photo.download_url}
                    alt="images"
                    height="auto"
                  />
                </Link>
              </>
            ))}
        </div>

        <div className="navbar2">
          <img className="bar" />
        </div>
      </div>
    </div>
  );
};
export default Feed;
