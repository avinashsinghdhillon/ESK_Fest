import React, {Component} from 'react';
import './SignUpCompo.css';
import googleSignup from '../../assets/images/btn_google_signin_dark_normal_web@2x.png';
import API from "../../utils/API"; //add all the API. routes here.
//import User from '../../../models';

class SignUpCompo extends Component {

  state = {
    //the state will hold the user object if the user logs in or creates a new account
    user: {}
  }

  componentDidMount(){
    //check to see if the user is logged in and load User in state////////////////////////
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
            <input type="text" id="fname" name="fname" />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" />
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Must include a capital letter, number, and at least 6 characters" />
          </div>
          <div className="submit">
            <button className="button" id="signupSubmit" type="submit" text="Submit">Submit</button>
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