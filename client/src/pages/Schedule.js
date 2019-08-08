import React, { Component } from 'react';
import ScheduleNav from '../components/ScheduleNav';
import ArtistCard from '../components/ArtistCard';
import { Container } from '../components/Grid';
import API from '../utils/API';


class Schedule extends Component {
    state = {
        events: []
    };

    componentDidMount(){
        this.loadEvents();
    }

    //function to load artists and make call to API
    loadEvents = () => {
        API.getEvents()
        .then(res => {
            console.log(res.data)
            this.setState({ events: res.data})
        })
    }

    render() {
        return (
            <div>
            <ScheduleNav />
            <Container>
            {this.state.events.map((events, index) => {
                return(<ArtistCard
                    key={index}
                    id={events.id}
                    src={events.artistPicture}
                    name={events.artistName}
                    />)
            })}
            </Container>
            </div>
        );
    }
}

export default Schedule;
