import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from '../components/Grid';
import ScheduleByDayCard from '../components/ScheduleByDayCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../utils/API';
import moment from 'moment';

// import * as actions from '../actions';

class Itinerary extends Component {

  // state = {
  //   count: 0
  // }

//getItinerary();

  // componentDidUpdate() {
  //   if(this.state.count === 0){
      
  //     this.setState({count: 1})
  //   }
  // }

  getItinerary = () => {
    API.getUserItineraries({
      userID: this.props.userID
    })
    .then(res => {
      // if(this.state.count > 1){
      //   return eventsList;
      // }
      // this.setState({count: 2})
      const eventsList = []
      debugger;
      for(let i = 0; i < res.data.length; i++){
        //console.log("state.count", this.state.count);
        console.log("i" , i);
          eventsList.push(
            <div id={res.data[0]._id} className="card">
                <h4>res.data[i].events.artists[0].artistName</h4>
                <img src={res.data[i].events.artists[0].artistPicture} alt=""></img>
                <h6>Day: {moment(res.data[i].startDate).format("ddd, MMM Do YYYY")}</h6>
                <h6>Time: {res.data[i].startTime} - {res.data[i].endTime}</h6>
            </div>
        );
      }
      console.log(eventsList)
      return eventsList
    })
  }

  render() {
    console.log("In render: ", this.getItinerary())
    return (
      <Container className="under-nav">
        <h1>Welcome back, {this.props.name}!</h1>
        <h3>Here are the events you were interested in.</h3>
          {
            this.getItinerary()
          }
      </Container>
    )
    console.log("Exiting render: ")
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated,
    email: state.auth.email,
    name: state.auth.name,
    userID: state.auth.id,
    auth: state.auth
  }
}

export default connect(mapStateToProps, {})(Itinerary);
