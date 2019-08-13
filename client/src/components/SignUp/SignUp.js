import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

import * as actions from '../../actions'
import { Container } from '../Grid';
import CustomInput from '../CustomInput'
import './SignUp.css';

class SignUp extends Component {
  //allows us to use the this.props.signUp for our axios call
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  };

 async onSubmit(formData){
   console.log("onSubmit got called");
   formData.userType = "local";
  console.log("data", formData)
   await this.props.signUp(formData);
   if(!this.props.errorMessage) {
     this.props.history.push('/itinerary')
   }
 }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <div className="text-center">
          <div className="alert alert-primary">Sign Up Using Google</div>
          {/* insert google button here */}
        </div>
        <form style={{width:"70%", margin: "auto"}} onSubmit= {handleSubmit(this.onSubmit)}>
         <fieldset>
            <Field
              name="firstName"
              label="First Name"
              type="text"
              id="First Name"
              component={CustomInput}
              placeholder="First Name" />
          </fieldset>
          <fieldset>
            <Field
              name="lastName"
              label="Last Name"
              type="text"
              id="Last Name"
              component={CustomInput}
              placeholder="Last Name" />
          </fieldset>
          <fieldset>
            <Field
              name="email"
              label="Email"
              type="text"
              id="E-mail"
              component={CustomInput}
              placeholder="Email" />
          </fieldset>
          <fieldset>
            <Field
              name="password"
              label="Password"
              type="password"
              id="Password"
              component={CustomInput}
              placeholder="Password" />
          </fieldset>

          { this.props.errorMessage ? 
            <div className="alert alert-danger">
              {this.props.errorMessage}
            </div> : null}
          
          <button type="submit" className="button" style={{fontSize: "20px", width: "100%"}}>Sign Up</button>
        </form>
        <div style={{height: "209px"}}></div>
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
  reduxForm({ form: 'signup' })
)(SignUp);