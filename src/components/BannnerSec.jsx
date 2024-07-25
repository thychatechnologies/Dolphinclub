import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './styles/banner.css';
import { Col, Container, Row } from 'react-bootstrap';

function BannerSec() {
    return (
        <Container>
            <Row className='bannerrow'>
                <Col className='banner-main'>
                    <Carousel
                        interval={2000}
                        nextIcon={<FaArrowRight className="custom-icon" />}
                        prevIcon={<FaArrowLeft className="custom-icon" />}
                    >
                        <Carousel.Item>
                            <Row className="align-items-center">
                                <Col md={6} className="d-flex align-items-center justify-content-center order-2 order-md-1">
                                    <div className="p-4 text-center">
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        <Button className='banner-btn'>See More</Button>
                                    </div>
                                </Col>
                                <Col md={6} className="d-flex align-items-center justify-content-center order-1 order-md-2">
                                    <img
                                        className="bannerImg"
                                        src='./assets/banners/banner01.png'
                                        alt="First slide"
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="align-items-center">
                                <Col md={6} className="d-flex align-items-center justify-content-center order-2 order-md-1">
                                    <div className="p-4 text-center">
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <Button className='banner-btn' >See More</Button>
                                    </div>
                                </Col>
                                <Col md={6} className="d-flex align-items-center justify-content-center order-1 order-md-2">
                                    <img
                                        className="bannerImg"
                                        src='./assets/banners/banner02.png'
                                        alt="Second slide"
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        {/* Uncomment the third item if needed */}
                        {/* <Carousel.Item>
                            <Row className="align-items-center">
                                <Col md={6} className="d-flex align-items-center justify-content-center order-2 order-md-1">
                                    <div className="p-4 text-center">
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        <Button variant="primary">See More</Button>
                                    </div>
                                </Col>
                                <Col md={6} className="d-flex align-items-center justify-content-center order-1 order-md-2">
                                    <img
                                        className="bannerImg"
                                        src='./assets/banners/banner03.png'
                                        alt="Third slide"
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item> */}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default BannerSec;
