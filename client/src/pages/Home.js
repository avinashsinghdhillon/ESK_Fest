import React, { Component } from 'react';
// import Jumbotron from '../components/Jumbotron';
// import API from '../utils/API';
// import { Link } from 'react-router-dom';
// import { Col, Row, Container } from '../components/Grid';
import { Container } from '../components/Grid';
// import { Input, FormBtn } from '../components/Form';
import './Home.css';
import Carousel from "../components/Carousel"
import Eskf from "../images/ESK-FOUNDATION-LOGO.png";

class Home extends Component {
    state = { show: false }

    render() {
        return (
            <div>
            <div className="big" >
            <Carousel/>
            </div>
            <Container fluid>
                <div>
                <h1 style={{textAlign:"center", fontSize:"60px", fontFamily: "Shrikhand, cursive"}}>EASTSIDE KINGS MUSIC FESTIVAL</h1><br/>
                <div id="eventDetails">
                    <h5 style={{textAlign:"center"}}>A celebration of the icons of blues, gospel, and jazz music in East Austin, TX.</h5>
                    {/* <h5>Eastside Kings Festival is a celebration of generations of great living musicians who have given us some of the best years of music, bringing together great blues, gospel, and jazz acts every year for two amazing evenings in East Austin, TX.</h5>
                    <h5>This year's show festival takes place across September 14th & 15th, 2019.</h5> */}
                </div>
                <hr/>
                <div id="About">
                <img src={Eskf} alt="Eastside Kings Foundation Logo" style={{marginTop:"20px", marginLeft:"auto", marginRight:"auto", display:"block"}}/>
                <div>
                <h1 style={{textAlign:"center"}}>About EASTSIDE KINGS FOUNDATION</h1><br/>
                <div className="aboutHome">
                    <h3>Who Are We?</h3>
                    <h5>The Eastside Kings Foundation is a local non-profit organization dedicated to preserving and highlighting excellent local musicians in blues, gospel, and jazz.</h5><br/>
                    <h3>What Is the Eastside Kings Festival?</h3>
                    <h5>Eastside Kings Festival is a celebration of generations of great living musicians who have given us some of the best years of music, bringing together great blues, gospel, and jazz acts every year for two amazing evenings in East Austin, TX.</h5>
                    <h5>This year's show festival takes place across September 14th & 15th, 2019.</h5>
                    <hr/>
                    <h6>To learn more about the event, check out the <a href="/schedule">schedule</a> or our <a href="/faq">FAQ</a> page.</h6>
                    <h6>Not finding what you need? <a href="/contact">Contact Us</a></h6>
                <hr/>
                </div>

                </div>
                </div>
                {/* <h1>SPONSORS</h1>
                <hr/>
                <h1>CONTACT</h1> */}
                </div>
            </Container>
            </div>
        )
    }
}

export default Home;