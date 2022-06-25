import React from "react";
import "./card.css";

function Card({ title, imageUrl }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Card;
