import React from 'react'   
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/nav.css'
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navmain() {
    return (
        <div>
            <Navbar expand="lg" className="bg-white">
                <Container className='d-flex justity-content-spacebetween'>
                    {/* Logo Section */}

                    <Navbar.Brand href="#" className='logoSection'>
                        <img className='nav-logo' src="./assets/Ajio-Logo.svg" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll" >

                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link >Home</Nav.Link>
                            <Nav.Link >About</Nav.Link>
                            <Nav.Link >Shop</Nav.Link>
                            <Nav.Link >Contact</Nav.Link>

                        </Nav>

                        {/* Search Section */}
                        <Form className="nav-icons d-flex gap-4">
                            <FaSearch className="nav-icon" />
                            <FaShoppingCart className="nav-icon" />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navmain
