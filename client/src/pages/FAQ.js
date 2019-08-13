import React, { Component } from 'react';
import { Container } from '../components/Grid';
import Eskf from '../images/ESK-FOUNDATION-LOGO.png';
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
                        <p>Wristbands are $20 per day (Saturday and Sunday). You can purchase wristbands in advance at Antone's Record Store, or at the Mission Possible Parking lot (main stage) on the day of the event.  The opening party at Antone's and the closing party at Justine's will have their own prices at the door. The workshops at the Austin Vintage Guitar Shop on Saturday are free to the public and available on a first come, first served basis.</p>
                    <hr/>
                        <h3>Can I bring my kid?</h3>
                        <p>Yes, we encourage you to bring kids to experience this unique festival! Kids under the age of 12 are free. All venues with the exception of Dozen Street are all ages.</p>
                    <hr/>
                        <h3>Is this during the day or night?</h3>
                        <p>All events take place in the afternoon and evening. You can see the schedule details on our <a href="/schedule">schedule</a> page.</p>
                    <hr/>
                        <h3>How did you choose the name Eastside Kings Festival?</h3>
                        <p>In 1999, our founder, <a href="https://www.austinchronicle.com/music/2017-09-08/eddie-stout-is-a-one-man-historical-blues-society/" target="_blank">Eddie Stout</a>, recorded and released an album he called Eastside Kings on Dialtone Records.
                            This recording was one of many in which Stout captured the talent of Austin's largely unknown but incredibly talented African American blues musicians such as Clarence Pierce, Willie Sampson, and Donald 'Duck' Jennings.
                            The name Eastside Kings stuck and the musicians began to use it for their gigs.  Naming the festival Eastside Kings seemed only appropriate as a tribute to those artists and to the East Austin post-war blues circuit where the festival takes place.
                        </p>
                        <img src="https://i.imgur.com/IUZcJOa.jpg" alt="Willie, Clarence, and Little Joe"/>
                        <p>Willie Sampson, Clarence Pierce, and Little Joe Washington a few of the original Eastside Kings!</p>
                </div>
            </Container>
        )
    }
}

export default Faq;