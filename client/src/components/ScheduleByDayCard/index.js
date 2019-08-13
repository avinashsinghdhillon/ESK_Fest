import React, { Component } from 'react';
import "./style.css";

class ScheduleByDayCard extends Component {

  render(props) {
    return (
      <div>
        <div className="card scheduleByDay">
          <h5>
            <span className="dateTag">Date: {this.props.eventDate}</span> | 
            Times: {this.props.startTime}-{this.props.endTime} |
            Artists: {this.props.artists} | 
            Location: {this.props.location}
          </h5>
          <button>More Info</button>
        </div>
      </div>
    )
  }
}
export default ScheduleByDayCard;