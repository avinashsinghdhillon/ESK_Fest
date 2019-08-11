import React, { Component } from 'react';
import { Container } from '../components/Grid';
import ArtistCard from '../components/ArtistCard';
import API from '../utils/API';

class Itinerary extends Component {

    state = {
        userName: "",
        // artists: [],
        events: []
    }

    componentDidMount() {
        this.loadEvents();
    }

    loadEvents = () => {
        API.getEvents()
        .then(res => {
            console.log("loading saved events")
            console.log(res.data)
            this.setState({ events: res.data })
        })
    }

    render() {
        return (
            <Container>
            <h1>Welcome back, USER NAME.</h1>
            <h3>Here are the events you were interested in.</h3>
            <div>
            {this.state.events.map((events, index) => {
                return(<ArtistCard
                    key={index}
                    id={events.id}
                    src={events.artistPicture}
                    name={events.artistName}
                    />)
            })}
            </div>
        </Container>
        )
    }
}

export default Itinerary;