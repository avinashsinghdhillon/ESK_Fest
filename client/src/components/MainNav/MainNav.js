import React from 'react';
import './MainNav.css';

function MainNav(props) {
    return (
        <ul className="nav" id="mainNav">
            <li>
                <a href="/">ESK Festival</a>
            </li>
            <li>
                <a href="/schedule" onClick={() => props.handlePageChange("Schedule")}>Schedule</a>
            </li>
            <li>
                <a href="/faq" onClick={() => props.handlePageChange("FAQ")}>FAQ</a>
            </li>
            <div className="account-links">

            {/* IF USER IS AUTHENTICATED, HIDE THIS */}
            <li>
                <a href="/signup" onClick={() => props.handlePageChange("SignIn")}>Sign In</a>
            </li>

            {/* IF USER IS AUTHENTICATED, SHOW THIS */}
                <li>
                    <a href="/itinerary" onClick={() => props.handlePageChange("Itinerary")}><i class="fas fa-id-badge"></i></a>
                </li>
                <li>
                    <a href="/signout" onClick={() => props.handlePageChange("SignOut")}>Sign Out</a>
                </li>
            </div>
        </ul>
    )
}

export default MainNav;