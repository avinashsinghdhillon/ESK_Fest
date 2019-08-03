import React from 'react';
import './ScheduleNav.css';

function ScheduleNav(props) {
    return (
        <ul className="nav">
            <li>
                <a href="#all" onClick={() => props.handlePageChange("All")} className="active">By Day</a>
            </li>
            <li>
                <a href="#artist" onClick={() => props.handlePageChange("Artist")}>By Artist</a>
            </li>
            <li>
                <a href="#venue" onClick={() => props.handlePageChange("Venue")}>By Venue</a>
            </li>
        </ul>
    )
}

export default ScheduleNav;