import React, { Component } from 'react';
import { Container } from '../components/Grid';
import './FAQ.css';

class Faq extends Component {
    render() {
        return (
            <Container>
                <div id="faq">
                    <h1>Frequently Asked Questions</h1>
                    <hr/>
                        <h3>Where can I park?</h3>
                        <p>There are several parking lots along 12th street near the venues. Free street parking is available as well.</p>
                    <hr/>
                        <h3>How much does it cost?</h3>
                        <p>Wristbands are $20 per day (Saturday and Sunday). The opening party at Antone's and the closing party at Justine's will have their own prices at the door. The workshops at the Austin Vintage Guitar Shop on Saturday are free to the public and available on a first come, first served basis.</p>
                    <hr/>
                        <h3>Can I bring my kid?</h3>
                        <p>Yes, we encourage you to bring kids to experience this unique festival! Kids under the age of 12 are free. All venues with the exception of Dozen Street are all ages.</p>
                    <hr/>
                        <h3>Is this during the day or night?</h3>
                        <p>All events take place in the afternoon and evening. You can see the schedule details on our <a href="/schedule">schedule</a> page.</p>
                    <hr/>
                        <h3></h3>
                        <p></p>
                </div>
            </Container>
        )
    }
}

export default Faq;