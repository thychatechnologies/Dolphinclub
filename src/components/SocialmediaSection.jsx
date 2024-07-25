import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './styles/socialmediasection.css'; // Ensure the path to your CSS file is correct

function SocialmediaSection() {
  return (
    <Container className="socialmedia-section pb-5">
      <Row className="text-center mb-4">
        <Col>
          <h2>Instagram</h2>
          <p>Follow us on Instagram for more updates</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <div className="image-container">
            <Image src="./assets/products/full-length-portrait-smiling-little-girl-hat.jpg" className="socialmedia-image" thumbnail />
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <div className="image-container">
            <Image src="./assets/products/girl-fairy-costume-with-mask.jpg" className="socialmedia-image" thumbnail />
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <div className="image-container">
            <Image src="./assets/products/full-length-portrait-smiling-little-girl-hat.jpg" className="socialmedia-image" thumbnail />
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <div className="image-container">
            <Image src="./assets/products/girl-fairy-costume-with-mask.jpg" className="socialmedia-image" thumbnail />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialmediaSection;
