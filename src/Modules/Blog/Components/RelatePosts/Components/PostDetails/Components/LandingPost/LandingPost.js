import React from "react";
import { useSelector } from "react-redux";
import calendar from "../../../.././../../../../Resources/Assets/calendar.svg";
import landingPost from "../../../.././../../../../Resources/Assets/landingPost.png";
import "./LandingPost.css";
function LandingPost() {
  const { currentLocal } = useSelector((state) => state.currentLocal);

  return (
    <div className="LandingPost">
      <h2>{currentLocal.home.beYourself}</h2>
      <p className="date">
        <img src={calendar} alt="calendar" />
        14, November 2021
      </p>
      <img src={landingPost} alt="landingPost" className="landingPost" />
      <div className="paragraph">
        <p>{currentLocal.post.firstPragraph}</p>
        <p>
      {currentLocal.post.secondPragraph}
        </p>
        <p>
        {currentLocal.post.thirdPragraph}
        </p>
      </div>
    </div>
  );
}

export default LandingPost;
