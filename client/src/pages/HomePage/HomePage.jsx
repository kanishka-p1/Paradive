import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/card/Card";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import PostCard from "../../components/PostCard/PostCard";
import { actions, activities } from "./content";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./HomePage.css";
import useFetch from "../../Hooks/useFetch";

function HomePage() {
  console.log(activities);

  return (
    <div className="HomePage">
      <Navbar />
      <div className="landing">
        <div className="search">
          <div className="searchBackground">
            <img
              id="surfer"
              src={process.env.PUBLIC_URL + "/Assets/canoeing.jpg"}
              alt=""
            />
            {/* <img id="overlaybottom" src={process.env.PUBLIC_URL + "/Assets/overlaybottom.png"} alt="" /> */}
          </div>
          <div className="searchBar">
            <h2>Explore</h2>
            <div className="searchInput">
              <input type="text" placeholder="Search Activities" />
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
        <div className="featuredActivities">
          <div className="activities">
            {/* <ActivityCard
              key={activities[0].id}
              src={activities[0].src}
              name={activities[0].name}
            />
            <ActivityCard
              key={activities[1].id}
              src={activities[1].src}
              name={activities[1].name}
            />
            <ActivityCard
              key={activities[2].id}
              src={activities[2].src}
              name={activities[2].name}
            /> */}
          </div>
        </div>
        <div className="featuredPosts">
          <div className="postBackground">
            {/* <img id="canoeing" src={process.env.PUBLIC_URL + "/Assets/canoeing.jpg"} alt="" /> */}
            {/* <PostCard
              key={data[0]._id}
              src={data[0].img[0]}
              title={data[0].title}
              username={data[0].username}
              date={data[0].date}
              desc={data[0].desc}
            />
            <PostCard
              key={data[1]._id}
              src={data[1].img[0]}
              title={data[1].title}
              username={data[1].username}
              date={data[1].date}
              desc={data[1].desc}
            />
            <PostCard
              key={data[2]._id}
              src={data[2].img[0]}
              title={data[2].title}
              username={data[2].username}
              date={data[2].date}
              desc={data[2].desc}
            /> */}
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
        <div className="actionCards">
          <div className="cards">
            <Card
              src={actions[0].src}
              para={actions[0].para}
              button={actions[0].button}
            />
            <Card
              src={actions[1].src}
              para={actions[1].para}
              button={actions[1].button}
            />
            <Card
              src={actions[2].src}
              para={actions[2].para}
              button={actions[2].button}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
