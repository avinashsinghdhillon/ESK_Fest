import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

import * as actions from '../../actions'
import { Container } from '../Grid';
import CustomInput from '../CustomInput'
import './SignIn.css';
import API from "../../utils/API";
import googleSignInButton from "../../images/btn_google_signin_dark_normal_web.png";

class SignIn extends Component {
  //allows us to use the this.props.signUp for our axios call
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  };

 async onSubmit(formData){
   console.log("onSubmit signIn got called");
   console.log("data", formData)
   await this.props.signIn(formData)
   if(!this.props.errorMessage) {
     this.props.history.push('/itinerary')
   }
 }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <div className="text-center">
          <div className="alert alert-primary">Sign In Using Google</div>
          {/* insert google button here */}
        </div>
        <form style={{width:"70%", margin: "auto"}} onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <Field
              name="email"
              label="Email"
              type="text"
              id="E-mail"
              component={CustomInput}
              placeholder="Your Email" />
          </fieldset>
          <fieldset>
            <Field
              name="password"
              label="Password"
              type="password"
              id="Password"
              component={CustomInput}
              placeholder="Your Password" />
          </fieldset>

          { this.props.errorMessage ? 
            <div className="alert alert-danger">
              {this.props.errorMessage}
            </div> : null}

          {/* <button type="submit" className="btn btn-primary">Sign In</button> */}
          <button type="submit" className="button" style={{fontSize: "20px", width: "100%"}}>Sign In</button>
        </form>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose (
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(SignIn);