import React from 'react';
import './ScheduleNav.css';

function ScheduleNav(props) {
    return (
        <ul className="nav">
            <li>
                <a href="/all" onClick={() => props.handlePageChange("All")} className="active">By Day</a>
            </li>
            <li>
                <a href="/byartist" onClick={() => props.handlePageChange("ByArtist")}>By Artist</a>
            </li>
            <li>
                <a href="/byvenue" onClick={() => props.handlePageChange("ByVenue")}>By Venue</a>
            </li>
        </ul>
    )
}

export default ScheduleNav;