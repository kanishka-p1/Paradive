import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div class="actionCard">
      <div className="actionElement">
        <div className="actionDetails">
          <img src={props.src} alt="" />
          <p>{props.para}</p>
          <button>{props.button}</button>
        </div>
      </div>

    </div>
  );
}

export default Card;
