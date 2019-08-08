import React from 'react';
import { Container } from '../Grid';
import './SignUp.css';
import googleSignInButton from "../../images/btn_google_signin_dark_normal_web.png";

function SignUp(props) {
    return (
        <Container>
            <div className="signup">
                <div className="google">
                    <img src={googleSignInButton} alt=""/>
                    <button href="#">SIGN IN WITH GOOGLE</button>
                </div>
                <div>
                    <h4>Sign Up</h4>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="fname"/>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lname"/>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" id="email" name="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Must include a capital letter, number, and at least 6 characters"/>
                </div>
                <div className="submit">
                    <input className="button" id="signupSubmit" type="submit" text="Submit"/>
                </div>
            </div>
            <div className="signin">
                <div>
                    <h4>Sign In</h4>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" id="userEmail" name="userEmail" placeholder="Enter your account e-mail"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="userPassword" name="userPassword" placeholder="Enter your password"/>
                </div>
                <div className="submit">
                    <input className="button" id="signinSubmit" type="submit" text="Submit"/>
                </div>
            </div>
        </Container>
    )
}

export default SignUp;