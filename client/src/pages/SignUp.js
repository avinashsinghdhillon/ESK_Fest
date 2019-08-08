import React, { Component } from 'react';
import { Container } from '../components/Grid';
import SignUpCompo from '../components/SignUp';
import User from '../../../models'
class SignUp extends Component {
  render() {
    return (
      <Container>
        <div className="signup">
          <div class="google">
            <a href="#"><img src="../images/btn_google_signin_dark_normal_web.png" alt="google sign in" /></a>
          </div>
          {/* <div>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="fname"/>
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lname"/>
                    <label for="email">E-Mail</label>
                    <input type="text" id="email" name="email"/>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Must include a capital letter, number, and at least 6 characters"/>
                </div> */}
          <div className="submit">
            <input type="submit" value="Submit" />
          </div>
          <div>
            <label for="email">E-Mail</label>
            <input type="text" id="userEmail" name="userEmail" />
            <label for="password">Password</label>
            <input type="password" id="userPassword" name="userPassword" placeholder="Must include a capital letter, number, and at least 6 characters" />
          </div>
        </div>
      </Container>
    )
  }
}

export default SignUp;