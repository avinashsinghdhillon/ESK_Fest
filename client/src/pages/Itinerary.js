import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Container } from '../components/Grid';
import ScheduleByDayCard from '../components/ScheduleByDayCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../utils/API';

// import * as actions from '../actions';

class Itinerary extends Component {

    state = {
        user: "",
        events: [],
        artists: [],
    }

    componentDidMount() {
        this.getItinerary();
    }

    getItinerary = event => {
        API.getUserItineraries
        .then((req,res) => {
            console.log(res.data)
            this.setState({ events: res.data, user: req.user })
        })
    }

    render() {
        return (
            <Container>
            <h1>Welcome back, {this.props.name}!</h1>
            <h3>Here are the events you were interested in.</h3>
            <div>
            {this.state.events.map((events, index) => {
                return(
                <ScheduleByDayCard
                    key={index}
                    id={user.id}
                    events={events.id}
                    date={events.startDate}
                    startTime={events.startTime}
                    endTime={events.endTime}
                    location={events.locationId}
                    artists={events.artists}
                    map={events.map}
                />)
            })}
            </div>
        </Container>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state)
    return {
      isAuth: state.auth.isAuthenticated,
        email: state.auth.email,
        name: state.auth.name
    }
  }

export default connect(mapStateToProps, {})(Itinerary);
