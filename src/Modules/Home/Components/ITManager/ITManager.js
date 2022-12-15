import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../../Common/Title/Title";
import ITMangerImg from "../../../../Resources/Assets/ITMangerImg.png";
import ArIT from "../../../../Resources/Assets/ArIT.png";
import { useSelector } from "react-redux";
import "./ITManager.css";
function ITManager() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="ITManager">
      <Container fluid>
        <Row>
          <Col md={6} xs={12} className={currentLocal.language==="العربيه"&&"text-right"}>
            <Title title={currentLocal.home.ITManager} />
            <ul>
              <div>
                <li>{currentLocal.home.firstIT}</li>
                <li>{currentLocal.home.secondId}</li>
              </div>
              <div>
                <li>{currentLocal.home.thirdIT}</li>
              </div>
            </ul>
          </Col>
          <Col md={6} xs={12} className="p-0 img-container">
            {currentLocal.language === "English" ? (
              <img src={ITMangerImg} alt="ITMangerImg" className="w-100" />
            ) : (
              <img src={ArIT} alt="ArIT" className="w-100 ArIT" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ITManager;
