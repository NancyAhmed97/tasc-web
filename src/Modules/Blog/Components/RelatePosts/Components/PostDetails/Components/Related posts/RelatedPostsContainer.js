import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Post from "../../../../../../../Common/Post/Post";
import "./RelatedPostsContainer.css";
function RelatedPostsContainer() {
  const { currentLocal } = useSelector((state) => state.currentLocal);

  return (
    <div className="RelatedPostsContainer">
      <Container fluid className="p-0">
        <Row>
          <h2 className="mb-3">{currentLocal.post.Relatedposts}</h2>
          <Col lg={6} md={6} xs={12}>
            <Post />
          </Col>
          <Col lg={6} md={6} xs={12} >
            <Post />
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default RelatedPostsContainer;
