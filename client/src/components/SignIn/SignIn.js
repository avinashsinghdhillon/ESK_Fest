import React, { Component } from 'react';
import { Container } from '../Grid';
import './SignIn.css';
import API from "../../utils/API";

class SignUp extends Component {
  state = {
    //the state will hold the user object if the user logs in or creates a new account
    user: {},
    email: "",
    password:""
  }

  componentDidMount(){
    //not sure what to add here.
  }

  handleInputSignIn = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Validate all fields in the sign up form//////////////////////////////////////
  // signupDataValidation = ()=>{
  //   return true;
  // }

  // this section handles the SIGN-IN button click
  //this is the non-google signin onClick button event
  signInUser = function (event) {
    console.log("button clicked");
    console.log(this.state.email)
    console.log(this.state.password)
    event.preventDefault()
    const user = [this.state.email, this.state.password]
    console.log("user: ", user)
    //1. Pull the user account
    API.signInUser(user)
      .then(
        console.log("signed in??")
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container>
        <div className="signin">
          <div>
            <h4>Sign In</h4>
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="email" name="email" onChange={this.handleInputSignIn} value = {this.state.email} placeholder="Enter your account e-mail" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={this.handleInputSignIn} value = {this.state.password} placeholder="Enter your password" />
          </div>
          <div className="submit">
            <button className="button" id="signinSubmit" type="submit" onClick={(event)=>{this.signInUser(event)}}>Submit</button>
          </div>
        </div>
      </Container>
    )
  }
}

export default SignUp;