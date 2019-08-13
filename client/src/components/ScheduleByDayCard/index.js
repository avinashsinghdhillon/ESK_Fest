import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./style.css";

class ScheduleByDayCard extends Component {

  state = {
    clicked: false,
    // saved: "",
  }

  itineraryClick = (bool) => {
    if (this.state.clicked === false) {
      this.setState({
        clicked: true,
        // saved: true
      })
    } else {
      this.setState({
        clicked: false,
        // saved: false
      })
    }
  }

  render(props) {
    return (
      <div>
        <div className="card scheduleByDay">
        <button className="saved" onClick={() => this.itineraryClick()}>
            {/* IF EVENT IS SAVED, SHOW THIS */}
            {/* <FontAwesomeIcon icon={["fas", "bookmark"]} /> */}
            {/* IF EVENT IS NOT SAVED, SHOW THIS */}
              {
                this.state.clicked 
                  ? <span><FontAwesomeIcon icon={['fas', 'bookmark']} /> Saved to Itinerary</span>
                  : <span><FontAwesomeIcon icon={['far', 'bookmark']} /> Save to Itinerary</span>
              }
        </button>
              <h4 style={{textAlign:"center"}}><span className="dateTag">Date: {this.props.startDate}</span></h4><hr/>
            <div className="box">
              <div className="eventText">
                <h4>Times:</h4> <h3>{this.props.startTime} - {this.props.endTime}</h3>
                <h4>Artists:</h4> <h3>{this.props.artists}</h3>
                <h4>Location:</h4> <h3>{this.props.location}</h3>
              </div>
              <div className="map">
                <img src={this.props.map} alt="venue location"/>
              </div>
            </div>
          {/* <button className="button" style={{margin: "auto", fontSize:"20px"}}>More Info</button> */}
        </div>
      </div>
    )
  }
}
export default ScheduleByDayCard;