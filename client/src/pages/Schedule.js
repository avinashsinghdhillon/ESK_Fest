import React, { Component } from 'react';
import ScheduleNav from '../components/ScheduleNav';
import ArtistCard from '../components/ArtistCard';
import { Container } from '../components/Grid';

class Schedule extends Component {


    render() {
        return (
            <Container>
            <ScheduleNav />
            <h1>ARTISTS SCHEDULE HERE</h1>
            <ArtistCard />
            </Container>
        );
    }
}

export default Schedule;
