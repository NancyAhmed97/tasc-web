import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SafeBackup from "../../../../Resources/Assets/browser (1).svg";
import AnytimeAnywhere from "../../../../Resources/Assets/browser (2).svg";
import Updates from "../../../../Resources/Assets/browser (3).svg";
import { useSelector } from "react-redux";
import "./AdvancedFeatures.css";
function AdvancedFeatures() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const AdvancedFeatures = [
    {
      img: SafeBackup,
      title: currentLocal.aboutus.SafeBackup,
      text: currentLocal.aboutus.SafeBackupContant
    },
    {
      img: AnytimeAnywhere,
      title:currentLocal.aboutus.AnytimeAnywhere ,
      text: currentLocal.aboutus.AnytimeAnywhereContant
    },
    {
      img: Updates,
      title: currentLocal.aboutus.ContinuousUpdates,
      text:currentLocal.aboutus.ContinuousUpdatesContant     },
  ];
  return (
    <div className="AdvancedFeatures">
      <Container>
        <div className="AdvancedFeaturesContainer">
          <Row>
            {AdvancedFeatures.map((item, value) => {
              return (
                <Col md={4} xs={12} key={value} className="item">
                  <div className={currentLocal.language==="العربيه"?"text-box arBox":"text-box"}>
                    <div className="img-container">
                      <img src={item.img} alt="img" />
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AdvancedFeatures;
