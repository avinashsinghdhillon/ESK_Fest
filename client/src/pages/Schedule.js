import React, { Component } from 'react';
import ScheduleNav from '../components/ScheduleNav';
import ArtistCard from '../components/ArtistCard';
import { Container } from '../components/Grid';

class Schedule extends Component {


    render() {
        return (
            <div>
            <ScheduleNav />
            <Container className="under-nav">
                {/* <h1>ARTISTS SCHEDULE HERE</h1> */}
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
            </Container>
            </div>
        );
    }
}

export default Schedule;
