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
                <h3>Would like to thank the following event sponsors for their gracious support for this event!</h3>
                <h5>The Eastside Kings Foundation preserves and promotes the cultural heritage of African American Blues,
                    Jazz, and Gospel. Our initiative focuses on largely unknown African American musicians and aims to give
                    them opportunities to showcase their music in live performances around the world.</h5>

                <h5>Our festival's current focus is on East Austin, specifically
                    the Rosewood area and its rich tradition and cultural legacy of Blues and R&amp;B dating back to the post-
                    War era. The Eastside Kings Festival strives to share Texas Blues with local community members and
                    fans from around the world.
                    This project is supported in part by the Cultural Arts Division of the City of Austin Economic Development Department.
                </h5>
                <h5>In addition to our sponsors, we would like to thank all our fans who have made the festival a truly unique and engaging experience, and for awarding us with the Best of Austin award for Best Cultural Preservation! Without our fans and supporters
                    we would not be here.
                </h5>
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
                <img src="http://www.austintexas.gov/sites/default/files/files/EGRSO/COA_CA_hz_fc_300.jpg" alt=""/>
            </Container>
        )
    }
}

export default Sponsors;