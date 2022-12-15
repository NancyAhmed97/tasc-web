import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import arrowRight from "../../../../Resources/Assets/right-arrow.svg";
import "./LatestPosts.css";
function LatestPosts() {
  const [changeFirstText, setChangeFirstText] = useState(false);
  const [changSecondText, setChangSecondText] = useState(false);
  const { currentLocal } = useSelector((state) => state.currentLocal);

  return (
    <div className="LatestPosts">
      <section
        class="latest-posts-section"
        data-v-d078e6ae=""
        data-v-e100241a=""
      >
        <div class={currentLocal.language==="العربيه"?"latest-posts-section__accordion text-right":"latest-posts-section__accordion"} data-v-d078e6ae="">
          <div
            class="latest-posts-section__accordion__img img-1"
            data-v-d078e6ae=""
          >
            {!(changeFirstText || changSecondText) && (
              <div className="overlay"></div>
            )}

            {changeFirstText || changSecondText ? (
              <p className="title"> {currentLocal.home.beYourself}</p>
            ) : (
              <>
                <div className="textContainer">
                  <p
                    style={{ position: "relative", zIndex: "200" }}
                    className="titlePragraph"
                  >
                    {" "}
                    {currentLocal.home.beYourself}{" "}
                  </p>
                  <p className="text-post">
                  {currentLocal.post.firstPragraph}

                  </p>
                  <Link to="/postdetails" className="text-white">
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
                </div>
              </>
            )}
          </div>
          <div
            class="latest-posts-section__accordion__img img-2"
            data-v-d078e6ae=""
            onMouseEnter={() => {
              setChangeFirstText(true);
            }}
            onMouseLeave={() => {
              setChangeFirstText(false);
            }}
          >
            {changeFirstText && <div className="overlay"></div>}

            {changeFirstText ? (
              <>
                <div className="textContainer">
                  <p
                    style={{ position: "relative", zIndex: "200" }}
                    className="titlePragraph"
                  >
                    {" "}
                    {currentLocal.home.beYourself}{" "}
                  </p>
                  <p className="text-post">
                  {currentLocal.post.firstPragraph}

                  </p>
                  <Link to="/postdetails" className="text-white">
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
                </div>
              </>
            ) : (
              <p className="title"> {currentLocal.home.beYourself} </p>
            )}
          </div>
          <div
            class="latest-posts-section__accordion__img img-3"
            data-v-d078e6ae=""
            onMouseEnter={() => {
              setChangSecondText(true);
            }}
            onMouseLeave={() => {
              setChangSecondText(false);
            }}
          >
            {changSecondText && <div className="overlay"></div>}

            {changSecondText ? (
              <>
                <div className="textContainer">
                  <p
                    style={{ position: "relative", zIndex: "200" }}
                    className="titlePragraph"
                  >
                    {" "}
                    {currentLocal.home.beYourself}{" "}
                  </p>
                  <p className="text-post">
                   {currentLocal.post.firstPragraph}
                  </p>
                  <Link to="/postdetails" className="text-white">
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
                </div>
              </>
            ) : (
              <p className="title"> {currentLocal.home.beYourself} </p>
            )}
          </div>{" "}
        </div>
      </section>
    </div>
  );
}

export default LatestPosts;
