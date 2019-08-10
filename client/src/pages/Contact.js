import React, { Component } from 'react';
import { Container } from '../components/Grid';
import Eskf from '../images/ESK-FOUNDATION-LOGO.png';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <Container>
                <div id="contact">
                    <h1>Contact Information</h1>
                    <hr/>
                        <h3>Event Organizer:</h3><h5>Sylvia's Husband</h5>
                        <h3>Email:</h3><h5>SylviaHusband@gmail.com</h5>
                        <h3>Phone:</h3><h5>(512) 555-5555</h5>
                </div>
            </Container>
        )
    }
}

export default Contact;