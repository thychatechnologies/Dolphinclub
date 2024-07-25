import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Button, Card } from 'react-bootstrap';
import './styles/prodCategory.css'; // Ensure this path is correct
import './styles/cardPro.css';
import { BsStarFill, BsBookmarkPlus } from 'react-icons/bs';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import the icons

function Procategorybar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [filter, setFilter] = useState('Select Filter');

    const categories = ['All', 'Mens', 'Womens'];

    const handleFilterSelect = (option) => {
        setFilter(option);
        // Implement your filter logic here
    };

    return (
        <Container className="procategorybar-container py-5">
            <Row className="procategorybar-row gap-sm-0 gap-4">
                <Col sm={6} className='d-flex justify-content-sm-start justify-content-center'>
                    <ul className="procategorybar-list">
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className={`procategorybar-list-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col sm={6} className="text-md-right d-flex justify-content-sm-end justify-content-center">
                    <Dropdown className="d-inline-block">
                        <Dropdown.Toggle className="sortedby-button" variant="secondary">
                            Sorted by
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="d-inline-block ml-2">
                        <Dropdown.Toggle className="filter-button" variant="secondary">
                            {filter}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="filter-dropdown-content">
                            <Dropdown.Item onClick={() => handleFilterSelect('100 to 1000')}>
                                100 to 1000
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterSelect('1000 to 2000')}>
                                1000 to 2000
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterSelect('Above 2000')}>
                                Above 2000
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>

            <Row className="card-row row-gap-5 pt-5">
                {Array(8).fill().map((_, index) => (
                    <Col md={4} xl={3} key={index} className="d-flex justify-content-center align-items-center">
                        <Card className="border-0 rounded-0 shadow position-relative product-card" style={{ width: '19rem' }}>
                            <Card.Img
                                variant="top"
                                src="./assets/products/asian-girl-posing-removebg-preview.png"
                                className="card-img-top"
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
                                        <Button variant="dark" className="w-100 p-3 rounded-0">
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
                    </Col>
                ))}
                <Button className="view-more-button">View More</Button>
            </Row>

        </Container>
    );
}

export default Procategorybar;
