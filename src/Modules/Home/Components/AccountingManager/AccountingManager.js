import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../../Common/Title/Title";
import { useSelector } from "react-redux";
import "./AccountingManager.css";
function AccountingManager() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className={currentLocal.language==="English"?"AccountingManager":"arAccountingManager"}>
      <Container>
        <Row>
          <Col md={6} xs={12}></Col>
          <Col md={6} xs={12} className="textContainer">
            <Title title={currentLocal.home.AccountingManager} />
            <li>
              <span>
                {currentLocal.home.firstAccount}
              </span>
            </li>
            <li>
              <span>
              {currentLocal.home.secondAccount}
              </span>
            </li>
            <li>
              <span>
              {currentLocal.home.thirdAccound}

              </span>
            </li>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AccountingManager;
