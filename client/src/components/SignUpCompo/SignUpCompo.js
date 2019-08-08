import React, {Component} from 'react';
import '../SignUp/SignUp.css';
import googleSignup from '../../images/btn_google_signin_dark_normal_web.png';
import API from "../../utils/API"; //add all the API. routes here.
//import User from '../../../models';//this is not being allowed

class SignUpCompo extends Component {

  state = {
    //the state will hold the user object if the user logs in or creates a new account
    user: {},
    fname: "",
    lname: "",
    email: "",
    password:""
  }

  componentDidMount(){
    //check to see if the user is logged in and load User in state or a Json file that updates state ////////////////////////

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //this is the non-google signup onClick button event
  signupUser = event => {
    event.preventDefault();
    console.log("in button. state.email: " + this.state.email);
        //1. check to see if user profile already exists in our DB using the email input
    //Select * from users where email = emailInput
    API.getUserByEmail(this.state.email)
      .then(res => console.log("Get user by email route: ", res))
      .catch(err => console.log(err));
    }

  render() {
    return (
      <div>
        <div className="signup">
          <div className="google">
            {/* add the google login ROUTE to this button /////////////////////////////////////*/}
            <img href="#" src={googleSignup} alt="" />
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
            <input type="password" id="password" name="password" onChange={this.handleInputChange} value = {this.state.password} placeholder="Must include a capital letter, number, and at least 6 characters" />
          </div>
          <div className="submit">
            <button className="button" id="signupSubmit" type="submit" onClick={(event)=>{this.signupUser(event)}}>Submit</button>
          </div>
        </div>
        <hr />
        <div className="signin">
          <div>
            <h4>Sign In</h4>
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="userEmail" name="userEmail" placeholder="Enter your account e-mail" />
            <label htmlFor="password">Password</label>
            <input type="password" id="userPassword" name="userPassword" placeholder="Enter your password" />
          </div>
          <div className="submit">
            <button className="button" id="signinSubmit" type="submit" text="Submit">Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpCompo;