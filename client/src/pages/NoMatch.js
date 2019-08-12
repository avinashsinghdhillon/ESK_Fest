import React, { Component } from 'react';
import { Container } from '../components/Grid';
import Eskf from '../images/ESK-FOUNDATION-LOGO.png';
import './About.css';


class NoMatch extends Component {
    state = { show: false }

    render() {
        return (
            <Container>
                <div>
                <img src={Eskf} alt="Eastside Kings Foundation Logo" style={{marginTop:"20px", marginLeft:"auto", marginRight:"auto", display:"block"}}/>
                <hr/>
                <h1 style={{textAlign:"center"}}>Something went wrong!</h1><br/>
                <h3 style={{textAlign:"center"}}>Sorry, we can't find that page...</h3>
                </div>
            </Container>
        )
    }
}

export default NoMatch;