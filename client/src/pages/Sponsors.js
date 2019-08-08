import React, { Component } from 'react';
import { Container } from '../components/Grid';
import Abs from '../images/abs_magazine_France.jpg';
import Avg from '../images/Austin_Vintage_Guitar_Logo.png';
import AntoneBW from '../images/antones-logo-bw.png';
import Boa1 from '../images/BOA2018_Certificates_CRITICS_BestCulturalPreservation.png';
import Boa2 from '../images/BOA2018_winner.png';
import Conan from '../images/conans_pizza_logo.png';
import Blues from '../images/living_blues_logo.jpg';
import Mitchell from '../images/paul_mitchell_logo.png';
import Moontower from '../images/moontower_logo.png';
import Nwr from '../images/newWest_records_logo.png';


class Sponsors extends Component {

    render() {
        return (
            <Container>
                <h1>Eastside Kings Festival</h1>
                <h2>Would like to thank the following event sponsors for the support!</h2>
                <img src={Boa1} alt=""/>
                <img src={Boa2} alt=""/>
                <img src={AntoneBW} alt=""/>
                <img src={Avg} alt=""/>
                <img src={Conan} alt=""/>
                <img src={Blues} alt=""/>
                <img src={Mitchell} alt=""/>
                <img src={Moontower} alt=""/>
                <img src={Nwr} alt=""/>
                <img src={Abs} alt=""/>
            </Container>
        )
    }
}

export default Sponsors;