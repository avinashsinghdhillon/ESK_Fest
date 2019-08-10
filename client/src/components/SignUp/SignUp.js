import React, { Component } from 'react';
import { Container } from '../Grid';
import './SignUp.css';
import API from "../../utils/API";
import googleSignInButton from "../../images/btn_google_signin_dark_normal_web.png";

class SignUp extends Component {
  state = {
    //the state will hold the user object if the user logs in or creates a new account
    user: {},
    fname: "",
    lname: "",
    email: "",
    password:""
  }

  componentDidMount(){
    //not sure what to add here.
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Validate all fields in the sign up form//////////////////////////////////////
  signupDataValidation = ()=>{
    return true;
  }


  // this section handles the SIGN-UP button click
  //this is the non-google signup onClick button event
  signupUser = function (event){
    event.preventDefault();
    //if signup form entries are not valid, do not proceed
    if(!this.signupDataValidation())
    {
      return alert("please check all fields");
    }
    console.log("in button. state.email: " + this.state.email);
    //Check to see if user profile already exists in our DB using the email input
    API.getUserByEmail(this.state.email)
      .then(function (res){ 
        console.log("Get user by email route: ", res);
        //if the user email exists redirect to login page////////////////////Modal or alert?
        if(res.data){
          return alert("That email account already exists. Please sign in to access your acount");
        }
      })
      .catch(err => console.log(err));

    //create the new account as "local"
    API.createUserAccount({
      email: this.state.email,
      password: this.state.password,
      lname: this.state.lname,
      fname: this.state.fname,
      userType: "local"
    })
    .then(function(res){
       alert("user account created. res:", res);
    })
    .catch(err => console.log(err));
  }

  // this section handles the SIGN-IN button click
  //this is the non-google signin onClick button event
  signInUser = event => {
    event.preventDefault();
    console.log("in button. state.email: " + this.state.email);
    //1. Pull the user account
    API.getUserByEmail(this.state.email)
      .then(function (res){
        
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container>
        <div className="signup">
          <div className="google">
            <img src={googleSignInButton} alt="" />
            <button href="#">SIGN IN WITH GOOGLE</button>
          </div>
          <div>
            <h4>Sign Up</h4>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" onChange={this.handleInputChange} value = {this.state.fname}/>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" onChange={this.handleInputChange} value = {this.state.lname}/>
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="email" name="email" onChange={this.handleInputChange} value = {this.state.email}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"  onChange={this.handleInputChange} value = {this.state.password} placeholder="Needs a capital letter, a number, and minimun 6 characters" />
          </div>
          <div className="submit">
            <input className="button" id="signupSubmit" type="submit" text="Submit"  onClick={(event)=>{this.signupUser(event)}}/>
          </div>
        </div>
        <div className="signin">
          <div>
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
}

export default SignUp;