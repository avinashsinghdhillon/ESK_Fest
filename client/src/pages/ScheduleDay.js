import React, { Component } from 'react';
import ScheduleNavDay from '../components/ScheduleNav/ScheduleNavDay';
import ScheduleByDayCard from '../components/ScheduleByDayCard';
import { Container } from '../components/Grid';
import API from '../utils/API';

class ScheduleDay extends Component {
  state = {
    events: [],
    artists: [],
    venues: []
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
        const dates = [];
        //find unique dates in the dataset

        for (var i = 0; i < eventsByDay.length; i++) {
          if (dates.indexOf(eventsByDay[i].startDate) === -1) {
            dates.push(eventsByDay[i].startDate);
          }
debugger;
          //add the location name to the dataset
          eventsByDay[i].locationName = venues.filter(row => row.locationID === eventsByDay[i].locationID)[0].locationName;

          //add the artists
          eventsByDay[i].artistNames = "";
          for (var a = 0; a < eventsByDay[i].artists.length; a++){
            eventsByDay[i].artistNames += artists.filter(r => r._id === eventsByDay[i].artists[a])[0].artistName + (i < eventsByDay[i].artists.length -1 ? ", ": "");
          }
        }
        this.setState({ events: eventsByDay })
      });
  }

  render() {
    return (
      <div>
        <ScheduleNavDay />
        <Container className="under-nav">
          {this.state.events.map((event, index) => {
            return (<ScheduleByDayCard
              key={event.id}
              id={event.id}
              location={event.locationName}
              startDate={event.startDate}
              startTime={event.startTime}
              endTime={event.endTime}
              artists={event.artistNames}
            />)
          })}
        </Container>
      </div>
    );
  }
}

export default ScheduleDay;
