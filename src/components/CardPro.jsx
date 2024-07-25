import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import the icons
import './styles/cardPro.css';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BsStarFill, BsBookmarkPlus } from 'react-icons/bs';

function CardPro() {
    return (
        <Card className="border-0 rounded-0 shadow position-relative product-card" style={{ width: '21rem' }}>
            <Card.Img
                variant="top"
                src="./assets/banners/banner02.png"
                className="rounded-0"
                alt="Product"
            />

            <Card.Body className="mt-3 mb-3">
                <Row>
                    <Col xs={10}>
                        <Card.Title>Product title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Short description heading</Card.Subtitle>
                        <Card.Text>
                            <BsStarFill className="text-warning" />
                            <BsStarFill className="text-warning" />
                            <BsStarFill className="text-warning" />
                            <BsStarFill className="text-warning" />
                            (123)
                        </Card.Text>
                    </Col>
                    <Col xs={2} className="text-end">
                        <BsBookmarkPlus size={24} />
                    </Col>
                </Row>
            </Card.Body>

            <Card.Footer className="bg-light text-center">
                <Row className="align-items-center g-0">
                    <Col xs={4}>
                        <h5>$129</h5>
                    </Col>
                    <Col xs={8}>
                        <Button variant="dark" className="w-100 p-3 rounded-0 ">
                            ADD TO CART
                        </Button>
                    </Col>
                </Row>
            </Card.Footer>

            <div className="icons-container">
                <FaHeart className="icon heart-icon" />
                <FaShoppingCart className="icon cart-icon" />
            </div>
        </Card>
    );
}

export default CardPro;
