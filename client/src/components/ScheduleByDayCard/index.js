import React, { Component } from 'react';
import "./style.css";

class ScheduleByDayCard extends Component {

  render(props) {
    return (
      <div>
        <div className="card scheduleByDay">
          {/* <h5> */}
            <h4 style={{textAlign: "center"}}><span className="dateTag">Date: {this.props.startDate}</span></h4><hr/>
            <h4>Times: {this.props.startTime} - {this.props.endTime}</h4>
            <h4>Artists: {this.props.artists}</h4>
            <h4>Location: {this.props.location}</h4>
          {/* </h5> */}
          <button className="button" style={{margin: "auto", fontSize:"20px"}}>More Info</button>
        </div>
      </div>
    )
  }
}
export default ScheduleByDayCard;