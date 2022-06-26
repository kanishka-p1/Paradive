import React from "react";
import "./activityCard.css";

function Card(props) {
  return (
    <div className="activityCardContainer">
      <div className="card-container">
        <div className="image-container">
          <img src={props.src} alt="" />
        </div>

      </div>
      <div className="card-title">
        <h3>{props.name}</h3>
      </div>
    </div>

  );
}

export default Card;
