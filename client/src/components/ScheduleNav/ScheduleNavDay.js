import React from 'react';
// import { Link } from 'react-router-dom';
import './ScheduleNav.css';

function ScheduleNavDay(props) {
    return (
        <ul className="nav-tabs">
            <li className="tab">
                <a href="/scheduleday" onClick={() => props.handlePageChange("ScheduleDay")} className="active">By Day</a>
            </li>
            <li className="tab">
                <a href="/schedule" onClick={() => props.handlePageChange("Schedule")}>By Artist</a>
            </li>
            {/* <li className="tab">
                <a href="/schedulevenue" onClick={() => props.handlePageChange("ScheduleVenue")}>By Venue</a>
            </li> */}
        </ul>
    )
}

export default ScheduleNavDay;