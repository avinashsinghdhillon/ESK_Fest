import React, { Component } from 'react';
// import Jumbotron from '../components/Jumbotron';
// import API from '../utils/API';
// import { Link } from 'react-router-dom';
// import { Col, Row, Container } from '../components/Grid';
import { Container } from '../components/Grid';
// import { Input, FormBtn } from '../components/Form';
import './Home.css';
import Carousel from "../components/Carousel"

class Home extends Component {
    state = { show: false }

    render() {
        return (
            <Container fluid>
                <h1>JUMBOTRON</h1>
                <div  className="big" >
                <Carousel/>
                </div>
                <hr/>
                <h1>WELCOME TO THE EASTSIDE KINGS MUSIC FESTIVAL, LOCATED IN AUSTIN, TX.</h1>
                <div id="eventDetails">
                    <h4>Event Details Here</h4>
                </div>
                <hr/>
                <h1>SPONSORS</h1>
                <hr/>
                <h1>CONTACT</h1>
            </Container>
            
        )
    }
}

export default Home;