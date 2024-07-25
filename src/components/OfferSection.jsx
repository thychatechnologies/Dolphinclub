import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

function OfferSection() {
    return (
        <Container>
            <Row className='row-gap-4'>
                <Col md={6}>
                    <img className='w-100' src="./assets/banners/Dclub Web 01.jpg" alt="" />
                </Col>
                <Col md={6}>
                    <img className='w-100' src="./assets/banners/Dclub Web 02.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default OfferSection
