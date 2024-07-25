import React from 'react'
import BannnerSec from '../components/BannnerSec'
import { Container } from 'react-bootstrap'
import './styles/home.css'
import Featuressection from '../components/Featuressection'
import OfferSection from '../components/OfferSection'
import Procategorybar from '../components/Procategorybar'
import SocialmediaSection from '../components/SocialmediaSection'
import Footer from '../components/Footer'
import Ourbrands from '../components/Ourbrands'

export default function Home() {
    return (
        <div>
            <Container fluid className='bannerSectionmain'>
                <BannnerSec />
            </Container>
            <Featuressection />
            <OfferSection />
            <Procategorybar />
            <SocialmediaSection />
            <Ourbrands />
            <Footer />

        </div>
    )
}
