import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/card/Card";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import PostCard from "../../components/PostCard/PostCard";
import { actions, activities } from "./content";
import "./HomePage.css";

function HomePage() {



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
          </div>
        </div>


        <div className="featuredActivities">
          <div className="activities">
            <ActivityCard
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
            />
          </div>
        </div>
        <div className="featuredPosts">
          <div className="postBackground">

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
