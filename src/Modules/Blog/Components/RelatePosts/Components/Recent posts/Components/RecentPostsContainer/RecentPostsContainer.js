import React from "react";
import "./RecentPostsContainer.css";
import { useSelector } from 'react-redux';
function RecentPostsContainer() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="RecentPostsContainer ">
      <div className="title">
        <h2>{currentLocal.post.Recentposts}</h2>
      </div>
      <ul>
        <li>
      {currentLocal.post.firstData}
        </li>
        <li>
      {currentLocal.post.secondData}
        </li>
      
        <li>
        {currentLocal.post.thirdData}
        </li>
      </ul>
    </div>
  );
}

export default RecentPostsContainer;
