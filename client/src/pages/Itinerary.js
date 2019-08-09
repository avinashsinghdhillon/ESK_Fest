import React, { Component } from 'react';
import { Container } from '../components/Grid';
import ArtistCard from '../components/ArtistCard';

class Itinerary extends Component {
    render() {
        return (
            <Container>
            <h1>Welcome back, USER NAME.</h1>
            <h3>Here are the events you were interested in.</h3>
            <div>
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />

            {/* {this.state.events.map((events, index) => {
                return(<ArtistCard
                    key={index}
                    id={events.id}
                    src={events.artistPicture}
                    name={events.artistName}
                    />)
            })} */}
            </div>
        </Container>
        )
    }
}

export default Itinerary;