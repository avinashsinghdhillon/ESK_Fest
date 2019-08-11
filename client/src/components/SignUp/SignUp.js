import React from 'react';
import { Container } from '../Grid';
import './SignUp.css';

function SignUp(props) {
    return (
      <Container>
        <div className="signup">
          <div className="google">
            <img className="googleLogo" src={googleSignInButton} alt="" />
            {/* <button href="#">SIGN IN WITH GOOGLE</button> */}
          </div><hr/>
          <div>
            <h4>Sign Up</h4>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" onChange={this.handleInputChange} value={this.state.fname}/>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" onChange={this.handleInputChange} value={this.state.lname}/>
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="email" name="email" onChange={this.handleInputChange} value={this.state.email}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={this.handleInputChange} value={this.state.password} placeholder="Needs a capital letter, a number, and minimum 6 characters" />
          </div>
          <div className="submit">
            <input className="button" id="signupSubmit" type="submit" text="Submit" onClick={(event)=>{this.signupUser(event)}}/>
          </div>
        </div>
        <div className="signin">
          <div><hr/>
            <h4>Sign In</h4>
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="userEmail" name="userEmail" placeholder="Enter your account e-mail" />
            <label htmlFor="password">Password</label>
            <input type="password" id="userPassword" name="userPassword" placeholder="Enter your password" />
          </div>
          <div className="submit">
            <input className="button" id="signinSubmit" type="submit" text="Submit" />
          </div>
        </div>
      </Container>
    )
}

export default SignUp;