import React from 'react';
import './MainNav.css';

function MainNav(props) {
    return (
        <ul className="nav" id="mainNav">
            <li>
                <a href="/">ESK FEST</a>
            </li>
            <li>
                {/* All = About = Home? */}
                <a href="/about" onClick={() => props.handlePageChange("About")}>About</a>
            </li>
            <li>
                <a href="/schedule" onClick={() => props.handlePageChange("Schedule")}>Schedule</a>
            </li>
            <li>
                <a href="/faq" onClick={() => props.handlePageChange("FAQ")}>FAQ</a>
            </li>
            <li><a href="#">Account</a>
                <ul className="dropdown">
                    <li onClick={() => props.handlePageChange("SignIn")}>
                        <a href="/signup">Sign In</a>
                    </li>
                    <li onClick={() => props.handlePageChange("SignUp")}>
                        <a href="/signup">Sign Up</a>
                    </li>
                    <li onClick={() => props.handlePageChange("Itinerary")}>
                        <a href="/itinerary">Itinerary</a>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default MainNav;