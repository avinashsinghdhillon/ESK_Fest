import React, { Component } from 'react';
import { Container } from '../components/Grid';
import Eskf from '../images/ESK-FOUNDATION-LOGO.png';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <Container>
                <img src={Eskf} alt="esk-logo"/>
                <div id="contact">
                    <h1>Contact Information</h1>
                    <hr/>
                        <h3>Event Organizer:</h3><h5>Eddie Stout</h5>
                        <h3>Phone:</h3><h5>(512) 228 - 8434</h5>
                </div>
            </Container>
        )
    }
}

export default Contact;