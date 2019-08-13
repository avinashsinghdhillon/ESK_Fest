import React from 'react';
import { Link } from 'react-router-dom';
import './ScheduleNav.css';

function ScheduleNavDay(props) {
    return (
        <ul className="nav-tabs">
            <li className="tab">
                <Link to="/scheduleday" onClick={() => props.handlePageChange("ScheduleDay")} className="active">By Day</Link>
            </li>
            <li className="tab">
                <Link to="/schedule" onClick={() => props.handlePageChange("Schedule")}>By Artist</Link>
            </li>
            {/* <li className="tab">
                <a href="/schedulevenue" onClick={() => props.handlePageChange("ScheduleVenue")}>By Venue</a>
            </li> */}
        </ul>
    )
}

export default ScheduleNavDay;