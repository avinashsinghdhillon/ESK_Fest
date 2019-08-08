import React from 'react';
import './ScheduleNav.css';

function ScheduleNav(props) {
    return (
        <ul className="nav-tabs">
            <li className="tab">
                <a href="/all" onClick={() => props.handlePageChange("All")}>By Day</a>
            </li>
            <li className="tab">
                <a href="/byartist" onClick={() => props.handlePageChange("ByArtist")} className="active">By Artist</a>
            </li>
            <li className="tab">
                <a href="/byvenue" onClick={() => props.handlePageChange("ByVenue")}>By Venue</a>
            </li>
        </ul>
    )
}

export default ScheduleNav;