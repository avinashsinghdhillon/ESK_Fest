import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScheduleNavDay from '../components/ScheduleNav/ScheduleNavDay';
import { Container } from '../components/Grid';
import API from '../utils/API';
import moment from 'moment';
import "./ScheduleDay.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ScheduleDay extends Component {
  constructor(props){
    super(props);
    //this.onSubmit = this.onSubmit.bind(this)
  };

  state = {
    events: [],
    artists: [],
    venues: [],
    days: []
  };

  componentDidMount() {
    //default to day
    this.loadVenues();
    this.loadArtists();
    this.loadEventsDay();

  }

  //function to load venues
  loadVenues = () => {
    API.getVenues()
      .then(res => {
        this.setState({ venues: res.data })
      })
  }

  //function to load artists
  loadArtists = () => {
    API.getArtists()
      .then(res => {
        this.setState({ artists: res.data })
      })
  }

  //function to load events
  loadEventsDay = () => {
    API.getEventsByDay()
      .then(res => {
        console.log("eventsByDay: ", res.data)
        const eventsByDay = res.data;
        const venues = this.state.venues;
        const artists = this.state.artists;
        const eventDates = [];
        //find unique dates in the dataset also parse them into the format required 
        for (var i = 0; i < eventsByDay.length; i++) {
          const parsedDate = moment(eventsByDay[i].startDate).format("ddd, MMM Do YYYY");
          eventsByDay[i].eventDate = parsedDate;
          if (eventDates.indexOf(parsedDate) === -1) {
            eventDates.push(parsedDate);
          }
          //add the location name to the dataset
          eventsByDay[i].locationName = venues.filter(row => row.locationID === eventsByDay[i].locationID)[0].locationName;

          //add the location map to the dataset
          eventsByDay[i].locationMap = venues.filter(row => row.locationID === eventsByDay[i].locationID)[0].locationMap;

          //add the artists
          eventsByDay[i].artistNames = "";
          for (var a = 0; a < eventsByDay[i].artists.length; a++) {
            eventsByDay[i].artistNames += artists.filter(r => r._id === eventsByDay[i].artists[a])[0].artistName + (i < eventsByDay[i].artists.length - 1 ? ", " : "");
          }
        }
        this.setState({
          events: eventsByDay,
          days: eventDates
        })
      });
  }

  itineraryClick = (eventID) => {
    //this is where we add the event to the users itinerary
    API.saveEventToItinerary({
      userID: this.props.userID,
      eventID: eventID
    })
    .then(console.log("itenerary saved"))
    .catch(err => console.log(err));

    // if (this.state.clicked === false) {
    //   this.setState({
    //     clicked: true,
    //     // saved: true
    //   })




    // } else {
    //   this.setState({
    //     clicked: false,
    //     // saved: false
    //   })
    // }
    //this is where we DELETE the event from the user's itinerary


  }

  createScheduleLayout = () => {

    //Losing state in the loops hence these temporary variables to hold the state data
    const stateVenues = this.state.venues;
    const stateEvents = this.state.events;
    const stateDays = this.state.days;


    let daysArr = [];
    for (let i = 0; i < stateDays.length; i++) {
      let venuesArr = [];
      const tempEventList = stateEvents.filter(row => row.eventDate === stateDays[i])
      //loop through the temp events list to assign child elements
      for (let e = 0; e < tempEventList.length; e++) {
        let eventArr = [];
        const venuesAdded = [];
        //assign venue sub-headings in this loop
        for (let v = 0; v < stateVenues.length; v++) {
          //if the location matches event location
          if (tempEventList[e].locationName === stateVenues[v].locationName) {
            if (venuesAdded.indexOf(tempEventList[e].locationName) === -1) {
              eventArr.push(
                <div>
                  <h4>{tempEventList[e].locationName} | {tempEventList[e].startTime} - {tempEventList[e].endTime}</h4>
                  <h6>Artists: {tempEventList[e].artistNames}</h6>
                  {/* <button style={{ fontSize: "20px" }} className="button bdButton"><FontAwesomeIcon icon="id-badge" />More Info</button> */}
                  {this.props.isAuth ?
                  <button id={tempEventList[e]._id} className="saved bdIcon" onClick={() => this.itineraryClick(tempEventList[e]._id)}>
                    {/* IF EVENT IS SAVED, SHOW THIS */}
                    {/* <FontAwesomeIcon icon={["fas", "bookmark"]} /> */}
                    {/* IF EVENT IS NOT SAVED, SHOW THIS */}
                    {
                      this.state.clicked
                        ? <span><FontAwesomeIcon icon={['fas', 'bookmark']} /> Saved to Itinerary</span>
                        : <span><FontAwesomeIcon icon={['far', 'bookmark']} /> Save to Itinerary</span>
                    }
                  </button>
                  : null}
                </div>
              )
            }
          }
        }
        venuesArr.push(
          <Container className="card scheduleByDay">
            {eventArr}
          </Container>);
      }
      daysArr.push(
        <Container>
          <h2 className="dayLabel">{stateDays[i]}</h2>
          {venuesArr}
        </Container>
      )
    }
    return daysArr;
  }
  render() {
    return (
      <div>
        <ScheduleNavDay />
        <Container className="under-nav">
          {this.createScheduleLayout()}
        </Container>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      isAuth: state.auth.isAuthenticated,
      auth: state.auth,
      name: state.auth.name,
      email: state.auth.email,
      userID: state.auth.id
  }
}
export default connect(mapStateToProps, {})(ScheduleDay);
//export default ScheduleDay;
