import React from "react";
import postImg from "../../../Resources/Assets/post.png";
import calendar from "../../../Resources/Assets/calendar.svg";
import arrowRight from "../../../Resources/Assets/arrow-right.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Post.css";
function Post() {
  const { currentLocal } = useSelector((state) => state.currentLocal);

  return (
    <div className="post">
      <div className="overlay"></div>
      <img src={postImg} alt="postImg" className="postImg" />
      <div className="Content">
        <p className="date">
          <img src={calendar} alt="calendar" />
          14, November 2021
        </p>
        <h5>{currentLocal.home.beYourself}</h5>
        <p className="arrowRight mt-4">
          <Link to="/postdetails">
            {" "}
            {currentLocal.language === "English" ? (
              <>
                {currentLocal.home.viewpost}{" "}
                <img src={arrowRight} alt="arrowRight" />
              </>
            ) : (
              <>
                <img src={arrowRight} alt="arrowRight" />{" "}
                {currentLocal.home.viewpost}
              </>
            )}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Post;
