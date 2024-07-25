import React from 'react';
import './styles/featuressection.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { TiTick } from "react-icons/ti";

function Featuressection() {
    return (
        <Container className="features-section my-md-5 my-3 overflow-hidden">
            <Row>
                <Col md={3} className="feature px-5">
                    <div className="icon" >  <TbTruckDelivery /></div>
                    <h4>FREE DELIVERY</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore repudianda.</p>
                </Col>
                <Col md={3} className="feature px-5">
                    <div className="icon" >  <FaMoneyBillWave /></div>
                    <h4>VALUE FOR MONEY</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore repudianda.</p>
                </Col>
                <Col md={3} className="feature px-5">
                    <div className="icon" > <GrSecure /></div>
                    <h4>SECURE PAYMENT</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore repudianda.</p>
                </Col>
                <Col md={3} className="feature px-5">
                    <div className="icon" >  <TiTick /></div>
                    <h4> 100% AUATHENTIC</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore repudianda.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Featuressection;
