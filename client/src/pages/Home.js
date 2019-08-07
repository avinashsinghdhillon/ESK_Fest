import React, { Component } from 'react';
// import Jumbotron from '../components/Jumbotron';
// import API from '../utils/API';
// import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
// import { Input, FormBtn } from '../components/Form';
import './Home.css';

class Home extends Component {
    state = { show: false }

    // showModal = () => {
    //     this.setState({ show: true });
    // }

    // hideModal = () => {
    //     this.setState({ show: false });
    // }
    render() {
        return (
            <Container fluid>
                <h1>WELCOME TO THE EASTSIDE KINGS MUSIC FESTIVAL, LOCATED IN AUSTIN, TX.</h1>
                <div id="eventDetails">
                    <h4>Event Details Here</h4>
                </div>
                {/* <Modal show={this.state.show} handleClose={this.hideModal} >
                <div className="signup">
                    <div class="google">
                        <a href="#"><img src="../../images/btn_google_signin_dark_normal_web.png" alt="google sign in"/></a>
                    </div>
                    <div>
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="fname"/>
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lname"/>
                        <label for="email">E-Mail</label>
                        <input type="text" id="email" name="email"/>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Must include a capital letter, number, and at least 6 characters"/>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Submit"/>
                    </div>
                </div>
                </Modal> */}
            </Container>
        )
    }
}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default Home;