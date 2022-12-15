import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import secondPost from "../../../../../../../../Resources/Assets/Rectangle 3748.png";
import firstPost from "../../../../../../../../Resources/Assets/Rectangle 3747.png";
import facebook from "../../../../../../../../Resources/Assets/Icon awesome-facebook-f.svg";
import twitter from "../../../../../../../../Resources/Assets/Icon metro-twitter.svg";
import linkedinIn from "../../../../../../../../Resources/Assets/Icon awesome-linkedin-in.svg";
import "./ContentWithoutBackwardContainer.css";
import { useSelector } from "react-redux";
function ContentWithoutBackwardContainer() {
  const { currentLocal } = useSelector((state) => state.currentLocal);

  return (
    <div className="ContentWithoutBackwardContainer">
      <Container fluid className="p-0">
        <Row>
          <h1>{currentLocal.post.compatibleData}</h1>
          <p className="mb-4">{currentLocal.post.firstData}</p>
          <p className="mb-4">{currentLocal.post.secondData}</p>
          <p>{currentLocal.post.thirdData}</p>
          <Row className="mt-5 imgContainer">
            <Col md={4} xs={12}>
              <img src={firstPost} alt="firstPost" />
            </Col>
            <Col md={4} xs={12}>
              <img src={secondPost} alt="secondPost" className="secondPost" />
            </Col>
          </Row>
          <h2>{currentLocal.post.compatibleData}</h2>

          <ul className="pargraph">
            <li>{currentLocal.post.firstList}</li>
            <li>{currentLocal.post.secondList}</li>
            <li>
           {currentLocal.post.thirdList}
            </li>
            <li>
        {currentLocal.post.fourthList}
            </li>
            <li>{currentLocal.post.fifthList}</li>
            <li>{currentLocal.post.sixthList} </li>
            <li>{currentLocal.post.seventhList}</li>
            <li>{currentLocal.post.eighthList}</li>
          
                     </ul>
          <div className="sharePost ">
            <ul>
              <li className="d-inline-block">
                <p>{currentLocal.post.Sharepost}</p>
              </li>
              <li className="d-inline-block">
                <img src={facebook} alt="facebook" />
              </li>
              <li className="d-inline-block">
                <img src={twitter} alt="twitter" />
              </li>
              <li className="d-inline-block">
                <img src={linkedinIn} alt="linkedinIn" />
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ContentWithoutBackwardContainer;
