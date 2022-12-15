import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tascImg from "../../../../Resources/Assets/tascImg.png";
import { useSelector } from "react-redux";
import "./TascCompanyInformation.css";
function TascCompanyInformation({ state }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);

  return (
    <div className="TascCompanyInformation">
      <Container fluid>
        <Row>
          <Col
            md={7}
            xs={12}
            className={currentLocal.language === "English" ? "En" : "Ar"}
          >
            <div className="title">
              <h1>{currentLocal.home.tascCompanyInformation}</h1>
              <p>{currentLocal.home.aboutus}</p>
            </div>
            <div className="pragraph">
              <p >{currentLocal.home.firstInfo}</p>
              <p>{currentLocal.home.secondInfo}</p>
            </div>
            {state !== "about" && (
              <div className="button">
                <button className="btn">{currentLocal.home.seeMore}</button>
              </div>
            )}
          </Col>
          <Col md={5} xs={12}>
            <img src={tascImg} alt="tascImg" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TascCompanyInformation;
