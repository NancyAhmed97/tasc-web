import React from "react";
import { useSelector } from "react-redux";
import Categoury from "./Components/Categoury/Categoury";
import RecentPostsContainer from "./Components/RecentPostsContainer/RecentPostsContainer";
function RecentPost() {
  const { currentLocal } = useSelector((state) => state.currentLocal);

  return (
    <div  className={currentLocal.language==="العربيه"?"text-right RecentPost":"RecentPost"}>
      <RecentPostsContainer />
      <Categoury />

    </div>
  );
}

export default RecentPost;
