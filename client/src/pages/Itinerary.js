import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from '../components/Grid';
import ArtistCard from '../components/ArtistCard';
import API from '../utils/API';

import * as actions from '../actions';

class Itinerary extends Component {
    async componentDidMount(){
        this.props.getItinerary(this.props.auth.id)
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

function mapStateToProps(state) {
    console.log('state', state)
    return {
      secret: state.itin.secret,
      dashboard: state.itin,
      auth: state.auth
    }
  }

export default connect(mapStateToProps, actions)(Itinerary);