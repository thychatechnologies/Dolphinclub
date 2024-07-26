import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './styles/banner.css';
import { Col, Container, Row } from 'react-bootstrap';

function BannerSec() {
    return (
        <Container className="p-0">
            <Row className='bannerrow overflow-hidden'>
                <Col className='banner-main text-white'>
                    <Carousel
                        interval={2000}
                        nextIcon={<FaArrowRight className="custom-icon" />}
                        prevIcon={<FaArrowLeft className="custom-icon" />}
                        indicators={false} // Remove pagination bullets
                    >
                        <Carousel.Item>
                            <Row className="align-items-center">
                                <Col md={6} className="d-flex align-items-center justify-content-center order-2 order-md-1">
                                    <div className="p-4 text-center banner-content">
                                        <h3>Stylish Kids Wear</h3>
                                        <p>Discover trendy and comfortable outfits for your kids, perfect for any occasion.</p>
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
                                    <div className="p-4 text-center banner-content">
                                        <h3>Fashionable and Fun</h3>
                                        <p>Find the perfect outfit for every occasion, making fashion fun and exciting for kids.</p>
                                        <Button className='banner-btn'>See More</Button>
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
                        <Carousel.Item>
                            <Row className="align-items-center">
                                <Col md={6} className="d-flex align-items-center justify-content-center order-2 order-md-1">
                                    <div className="p-4 text-center banner-content">
                                        <h3>Comfort Meets Style</h3>
                                        <p>Quality kids wear that keeps your little ones comfy and stylish all day long.</p>
                                        <Button className='banner-btn'>See More</Button>
                                    </div>
                                </Col>
                                <Col md={6} className="d-flex align-items-center justify-content-center order-1 order-md-2">
                                    <img
                                        className="bannerImg"
                                        src='./assets/banners/banner02.png'
                                        alt="Third slide"
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default BannerSec;
