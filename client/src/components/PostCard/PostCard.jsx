import React from "react";
import "./postcard.css";

function PostCard() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="login">
          <div className="img-container">
            <img
              id="login-image"
              src={process.env.PUBLIC_URL + "/Assets/login-image.jpg"}
              alt=""
            />
          </div>
          <div className="body-text">
            <p>Excited? Join our Community to have more fun!</p>
          </div>
          <div className="btn">
            <button>Login</button>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="post">
          <div className="img-container">
            <img
              id="post-image"
              src={process.env.PUBLIC_URL + "/Assets/post-image.png"}
              alt=""
            />
          </div>
          <div className="body-text">
            <p>Show the world your excursions Create a post</p>
          </div>
          <div className="btn">
            <button>Post</button>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="explore">
          <div className="img-container">
            <img
              id="explore-image"
              src={process.env.PUBLIC_URL + "/Assets/explore-image.png"}
              alt=""
            />
          </div>
          <div className="body-text">
            <p>Want to have a look at what all you can do this summer?</p>
          </div>
          <div className="btn">
            <button>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
