import React, { Component } from 'react';
import ScheduleNav from '../components/ScheduleNav';
import ArtistCard from '../components/ArtistCard';
import { Container } from '../components/Grid';
import API from '../utils/API';

class Schedule extends Component {
    state = {
        events: [],
        artists: [],
        venues: []
        //add additional states to hold the day/artist/venue
    
    };

    componentDidMount(){
        //default to day
        this.loadEventsDay();
    }

    //function to load artists and make call to API
    loadEventsDay = () => {
        API.getEvents()
        .then(res => {
            console.log("events", res.data)
            this.setState({ events: res.data})
        });
        API.getArtists()
            .then(res => {
                console.log("artists", res.data)
                this.setState({ artists: res.data })
        });
        API.getVenues()
            .then(res => {
                console.log("venues", res.data)
                this.setState({ venues: res.data })
            })
        }

    render(){
        return (
            <div>
            <ScheduleNav />
            <Container>
            {this.state.events.map((events, index) => {
                return(<ArtistCard
                    key={index}
                    id={events.id}
                    // src={artists.artistPicture}
                    // name={artists.artistName}
                    />)
            })}
            </Container>
            </div>
        );
    }
}

export default Schedule;
