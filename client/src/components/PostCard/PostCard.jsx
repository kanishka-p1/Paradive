import React from "react";
import "./postcard.css";

function ActivityCard() {
  return (
    <div class="container">
      <div class="card">
        <div class="content">
          <img id="post-image" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/e6/b6/59.jpg" alt="" />
          <h4>Jet Skiing is Fun!</h4>
          <h6><span>Posted By : </span> Michael Jordan</h6>
          <h6><span>Date : </span>7th May 2022</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Read More</button>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <img id="post-image" src="https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg" alt="" />
          <h4>Canoeing 1st Time!</h4>
          <h6><span>Posted By : </span> Josh Grad</h6>
          <h6><span>Date : </span> 21st June 2022</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Read More</button>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <img id="post-image" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/ed/6c/3a.jpg" alt="" />
          <h4>Jeez that was Scary</h4>
          <h6><span>Posted By : </span> Sasha Green</h6>
          <h6><span>Date : </span> 15th June 2022</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
