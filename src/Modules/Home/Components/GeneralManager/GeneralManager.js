import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GeneralManagerImg from "../../../../Resources/Assets/GeneralManager.png";
import RightManger from "../../../../Resources/Assets/RightManger.png";
import Title from "../..///../../Modules/Common/Title/Title"
import { useSelector } from "react-redux";

import "./GeneralManager.css";
function GeneralManager() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="GeneralManager">
      <Container fluid>
        
        <Row>
          <Col md={6} xs={12} className={currentLocal.language==="العربيه"?"arabic pt-5 mt-4":"pt-5 mt-4"} >
          <Title title={currentLocal.home.generalManager} />

            <ul className={currentLocal.language==="العربيه"&&"arGeneralManager"}>
              <div >
                <li>{currentLocal.home.firstUl} .</li>
                <li>{currentLocal.home.secondUrl}</li>
              </div>
              <div>
                <li>{currentLocal.home.thirdUrl}</li>
              </div>
            </ul>
          </Col>
          <Col md={6} xs={12} className="p-0">
            {currentLocal.language==="English"?
            <img
              src={GeneralManagerImg}
              alt="GeneralManagerImg"
              className="w-100 GeneralManagerImg"
            />
          :
          <img
          src={RightManger}
          alt="RightManger"
          className="w-100 RightManger"
        />
          }

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GeneralManager;
