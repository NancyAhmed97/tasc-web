import React from "react";
import { Link } from "react-router-dom";
import "./LandingSection.css";
import { useSelector } from "react-redux";
function LandingSection({ activePage }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  console.log(activePage);
  return (
    <div
      className={
        activePage === "Pricing plans"
          ? "Landing-pricing landing"
          : activePage === "Blog"
          ? "Landing-blog landing"
          : activePage === "Contact us"
          ? "Landing-contact landing"
          : "LandingSection landing"
      }
    >
      <div className="landing-container">
        <h1 className="text-white">{currentLocal.language==="English"&&activePage==="blog"&& "Our"} {activePage==="About us"&&currentLocal.navbar.aboutus}
        {activePage==="Blog"&&currentLocal.navbar.blog}
            {activePage==="Pricing plans"&&currentLocal.navbar.pricing}
            {activePage==="Contact us"&&currentLocal.navbar.contactus}
        </h1>
        <ul>
          <li>
            <Link to="/" className="text-white">
              {currentLocal.navbar.home}
            </Link>
          </li>
          <li>
            <span className="text-white">{activePage==="About us"&&currentLocal.navbar.aboutus}
            {activePage==="Blog"&&currentLocal.navbar.blog}
            {activePage==="Pricing plans"&&currentLocal.navbar.pricing}
            {activePage==="Contact us"&&currentLocal.navbar.contactus}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingSection;
