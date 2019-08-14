import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../../pages/ScheduleDay.css";

class ScheduleByDayCard extends Component {

  state = {
    clicked: false,
    // saved: "",
  }

  deleteClick = (bool) => {
  }

  render(props) {
    return (
      <div>
        <div className="card scheduleByDay">
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