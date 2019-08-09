import React, { Component } from 'react';
import { Container } from '../components/Grid';
import Eskf from '../images/ESK-FOUNDATION-LOGO.png';


class About extends Component {
    state = { show: false }

    render() {
        return (
            <Container>
                <img src={Eskf} alt="Eastside Kings Foundation Logo" style={{marginTop:"20px", marginLeft:"auto", marginRight:"auto", display:"block"}}/>
                <div>
                <hr/>
                <h1 style={{textAlign:"center"}}>About EASTSIDE KINGS FOUNDATION</h1><br/>
                    <h3>Who Are We?</h3>
                    <h5>The Eastside Kings Foundation is a non-profit organization dedicated to preserving and highlighting excellent local musicians in blues, gospel, and jazz.</h5><br/>
                    <h3>What Is the Eastside Kings Festival?</h3>
                    <h5>Eastside Kings Fest is a celebration for the great living musicians who have given us some of the best years of music. The event takes place the first week of September putting together great Blues/Gospel/Jazz acts every year for two amazing evenings.</h5><br/>
                    <h5>This year's show is in East Austin, TX September 14th & 15th, 2019.</h5>
                    <hr/>
                    <h6>To learn more about the event, check the schedule or our FAQ!</h6>
                    <h6>Not finding what you need? Get in contact with us!</h6>
                <hr/>
                </div>
            </Container>
        )
    }
}

export default About;