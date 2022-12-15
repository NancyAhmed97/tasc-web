import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import GetInTouchForm from "./Components/GetInTouchForm/GetInTouchForm";
import GetInTouchInfo from "./Components/GetInTouchInfo/GetInTouchInfo";
import { useSelector } from "react-redux";
import "./GetInTouch.css";
function GetInTouch() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className={currentLocal.language==="العربيه"?"GetInTouch text-right":"GetInTouch"}>
      <Container>
        <Row>
          <Col md={6} xs={12} >
              <GetInTouchInfo />
          </Col>
          <Col md={6} xs={12} className="getTouchForm">
          <GetInTouchForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GetInTouch;
