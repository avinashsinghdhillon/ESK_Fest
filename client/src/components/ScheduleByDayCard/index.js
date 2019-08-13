import React, { Component } from 'react';

class ScheduleByDayCard extends Component {

  render(props) {
    return (
      <div>
        <div className="card">
          <p>
            {this.props.location} | 
            {this.props.startDate} | 
            {this.props.startTime}-{this.props.endTime}
          </p>
          <button>More Info</button>
        </div>
      </div>
    )
  }
}
export default ScheduleByDayCard;