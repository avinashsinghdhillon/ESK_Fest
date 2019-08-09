import React from 'react';
import './ScheduleNav.css';

function ScheduleNavVenue(props) {
    return (
        <ul className="nav-tabs">
            <li className="tab">
                <a href="/scheduleday" onClick={() => props.handlePageChange("ScheduleDay")}>By Day</a>
            </li>
            <li className="tab">
                <a href="/schedule" onClick={() => props.handlePageChange("Schedule")}>By Artist</a>
            </li>
            <li className="tab">
                <a href="/schedulevenue" onClick={() => props.handlePageChange("ScheduleVenue")} className="active">By Venue</a>
            </li>
        </ul>
    )
}

export default ScheduleNavVenue;