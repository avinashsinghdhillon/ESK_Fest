import React from 'react';
import { Container } from '../Grid';
import './SignUp.css';

function SignUp(props) {
    return (
        <Container>
            <div className="signup">
                <div class="google">
                    <img src="../../images/btn_google_signin_dark_normal_web.png" alt=""/>
                    <button href="#">SIGN IN WITH GOOGLE</button>
                </div>
                <div>
                    <h4>Sign Up</h4>
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
                    <input class="button" id="signupSubmit" type="submit" text="Submit"/>
                </div>
            </div>
            <div className="signin">
                <div>
                    <h4>Sign In</h4>
                    <label for="email">E-Mail</label>
                    <input type="text" id="userEmail" name="userEmail" placeholder="Enter your account e-mail"/>
                    <label for="password">Password</label>
                    <input type="password" id="userPassword" name="userPassword" placeholder="Enter your password"/>
                </div>
                <div className="submit">
                    <input class="button" id="signinSubmit" type="submit" text="Submit"/>
                </div>
            </div>
        </Container>
    )
}

export default SignUp;