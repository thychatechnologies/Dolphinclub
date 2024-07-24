import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

function OfferSection() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img className='w-100' src="./assets/banners/offerSectioncopy.jpg" alt="" />
                </Col>
                <Col md={6}>
                    <img className='w-100' src="./assets/banners/offerSectioncopy.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default OfferSection
