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
                        <p>There are several parking lots along 12th street near the venues. Street parking is available as well.</p>
                    <hr/>
                        <h3>How much does it cost?</h3>
                        <p>Wristbands are $20 per day. The opening and closing parties will have their own prices at the door. The workshops on Saturday are free to the public and available on a first come, first served basis.</p>
                    <hr/>
                        <h3>Can I bring my kid?</h3>
                        <p>Yes, we encourage you to bring kids to experience this unique festival! Kids under the age of 12 are free. All venues with the exception of Dozen Street are all ages.</p>
                    <hr/>
                        <h3>Is this during the day or night?</h3>
                        <p>All events take place in the afternoon and evening. You can see the schedule details on our schedule page.</p>
                    <hr/>
                        <h3>Lorem ipsum dolor et ad bologna et maku da baga?</h3>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."</p>
                </div>
            </Container>
        )
    }
}

export default Faq;