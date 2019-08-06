import React from 'react';
import ScheduleNav from '../components/ScheduleNav';
import ArtistCard from '../components/ArtistCard';
import { Col, Row, Container } from '../components/Grid';

class Schedule extends component {


    render() {
        return (
            <Container fluid>
                <Row>
                <ScheduleNav />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                </Row>
            </Container>
        );
    }
}

export default Schedule;
