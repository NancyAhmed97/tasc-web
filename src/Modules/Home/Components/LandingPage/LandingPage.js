import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos"; 
import "aos/dist/aos.css"
import { useSelector } from "react-redux";
import Navbar from "../../../Common/Navbar/Navbar";
import "./LandingPage.css";
function LandingPage() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
useEffect(() => {
  AOS.init();
}, [])
  return (
    <>
      <div className="landingPage">
        <Navbar  activeState="home"/>
        <Container>
          <Row>
        <div className={currentLocal.language==="English"?"En landinpage-content":"Ar landinpage-content"} data-aos="fade-right">
        <Col md={12} xs={12}>
              <div className="landinpage-text mb-5 w-50 "   >
                <p className="text-white  light">
                  {currentLocal.home.wishing}
                </p>
                <h1 className="text-white ">
                  {currentLocal.home.TASCPartnersWithSoftwareSolutionProviders}
                </h1>
                <p className="text-white  mb-5 lighter">
                  {currentLocal.home.homeText}
                
                </p>
              </div>
            </Col>
            <Col md={12} xs={12}>
              <div className="landingpage-btn">
                <button className="contact-btn px-3 py-2 " >
                  <Link to="/meeting">{currentLocal.home.contactOurExpert}</Link>
                </button>
                <button className="aboutus-btn px-4 py-2">
                <Link to="/aboutus">{currentLocal.home.aboutus}</Link>

                </button>
              </div>
            </Col>
        </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
