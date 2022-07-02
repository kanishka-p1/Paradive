import React from "react";
import "./allActivity.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import { activities } from "./content";
function AllActivity() {
  return (
    <div className="allActivity">
      <Navbar />
      <div className="activities">
        <div className="activityRow">
          <ActivityCard src={activities[0].src} name={activities[0].name} />
          <ActivityCard src={activities[1].src} name={activities[1].name} />
          <ActivityCard src={activities[2].src} name={activities[2].name} />
        </div>

        <div className="activityRow">
          <ActivityCard src={activities[3].src} name={activities[3].name} />
          <ActivityCard src={activities[4].src} name={activities[4].name} />
          <ActivityCard src={activities[5].src} name={activities[5].name} />
        </div>

        <div className="activityRow">
          <ActivityCard src={activities[6].src} name={activities[6].name} />
          <ActivityCard src={activities[7].src} name={activities[7].name} />
          <ActivityCard src={activities[8].src} name={activities[8].name} />
        </div>

        <div className="activityRow">
          <ActivityCard src={activities[9].src} name={activities[9].name} />
          <ActivityCard src={activities[10].src} name={activities[10].name} />
          <ActivityCard src={activities[11].src} name={activities[11].name} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllActivity;
