import React from "react";
import "./postcard.css";

function ActivityCard(props) {
  return (
    <div class="container">
      <div class="card">
        <div class="content">
          <img id="post-image" src={props.src} alt="" />
          <h4>{props.title}</h4>
          <h6>
            <span>Posted By : </span> {props.username}
          </h6>
          <h6>
            <span>Date : </span> {props.date}
          </h6>
          <p>{props.desc}</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
