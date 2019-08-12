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
            <div>
            <div className="big" >
            <Carousel/>
            </div>
            <Container fluid>
                <div id="home">
                <hr/>
                <h1 style={{textAlign:"center"}}>WELCOME TO THE EASTSIDE KINGS MUSIC FESTIVAL</h1><br/>
                <div id="eventDetails">
                    <h5>Eastside Kings Fest is a celebration for the great living musicians who have given us some of the best years of music.</h5>
                    <h5>It takes place during the second weekend in September, putting together great Blues/Gospel/Jazz acts every year for two amazing evenings.</h5>
                    <h4>This year's show is in East Austin, September 14th & 15th, 2019.</h4>
                </div>
                <hr/>
                <div id="SPnCON">
                <h1>SPONSORS</h1>
                <hr/>
                <h1>CONTACT</h1>
                </div>
                </div>
            </Container>
            </div>
        )
    }
}

export default Home;