import React from 'react'
import BannnerSec from '../components/BannnerSec'
import { Container } from 'react-bootstrap'
import './styles/home.css'
import Featuressection from '../components/Featuressection'
import OfferSection from '../components/OfferSection'

export default function Home() {
    return (
        <div>
            <Container fluid className='bannerSectionmain'>
                <BannnerSec />
            </Container>
            <Featuressection/>
            <OfferSection/>

        </div>
    )
}
