import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import idea from "../../../../Resources/Assets/idea@4x.svg";
import Path from "../../../../Resources/Assets/Path 10919.svg";
import { useSelector } from "react-redux";
import "./TascActivity.css";
function TascActivity() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [toggleText, setToggleText] = useState(false);
  return (
    <div className={currentLocal.language==="العربيه"?"TascActivity text-right arTascActivity":"TascActivity"}>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col md={3} xs={12} className="position-relative darkSkyContainer">
            <div
              className={currentLocal.language==="العربيه"?"aractivityContent":"activityContent"}
              onMouseEnter={() => {
                setToggleText(true);
              }}
              onMouseLeave={() => {
                setToggleText(false);
              }}
            >
              <h2>{currentLocal.aboutus.tascActivity}</h2>
              <p>{currentLocal.aboutus.programDevelopment}</p>
              <p>{currentLocal.aboutus.ITConsultancy}</p>
            </div>
          </Col>
          <Col md={9}  xs={12} className="d-flex align-items-end position-relative aboutManContainer">
            <div className={currentLocal.language==="العربيه"?"arDevelopmentContent":"DevelopmentContent"}>
              <div className="title">
                <h2>
                  {" "}
                  <div>
                    <img src={idea} alt="idea" />
                    <p>
                      {" "}
                      {toggleText ?currentLocal.aboutus.ITConsultancy: currentLocal.aboutus.programDevelopment}
                    </p>
                  </div>
                  <img src={Path} alt="Path" />
                </h2>

                <p className="pr-2">
                  {toggleText
                    ? currentLocal.aboutus.itContent
                    : currentLocal.aboutus.developer}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TascActivity;
