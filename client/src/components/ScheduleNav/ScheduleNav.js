import React from 'react';
import { Link } from 'react-router-dom';
import './ScheduleNav.css';

function ScheduleNav(props) {
    return (
        <ul className="nav-tabs">
            <li className="tab">
                <Link to="/scheduleday" onClick={() => props.handlePageChange("ScheduleDay")}>By Day</Link>
            </li>
            <li className="tab">
                <Link to="/schedule" onClick={() => props.handlePageChange("Schedule")} className="active">By Artist</Link>
            </li>
            {/* <li className="tab">
                <a href="/schedulevenue" onClick={() => props.handlePageChange("ScheduleVenue")}>By Venue</a>
            </li> */}
        </ul>
    )
}

export default ScheduleNav;