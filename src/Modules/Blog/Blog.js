import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Common/Footer/Footer";
import LandingSection from "../Common/LandingPage/LandingSection";
import Navbar from "../Common/Navbar/Navbar";
import LatestPosts from "../Home/Components/LatestPosts/LatestPosts";
import Posts from "./Components/Posts/Posts";
import { useSelector } from "react-redux";
import "./Blog.css"
function Blog() {
  const { currentLocal } = useSelector((state) => state.currentLocal);

  return (
    <div className="blog">
      <Navbar activePage="Blog" />
      <LandingSection activePage="Blog" />
      <Container>
      <p className={currentLocal.language==="English"?"blogPargraph":"arblogPargraph"}> {currentLocal.blog.latestPosts}</p>
      </Container>
      <LatestPosts />
      <Container>
      <p className={currentLocal.language==="English"?"blogPargraph":"arblogPargraph"}> {currentLocal.blog.latestPosts}</p>
      </Container>
      <Posts />
      <Footer activeState="blog" />
    </div>
  );
}

export default Blog;
