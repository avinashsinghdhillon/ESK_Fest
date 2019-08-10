import React from 'react';
import './MainNav.css';

function MainNav(props) {
    return (
        <ul className="nav" id="mainNav">
            <li>
                <a href="/">Eastside Kings Festival</a>
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
            <li>
                <a href="/users/signin" onClick={() => props.handlePageChange("SignIn")}>Sign In</a>
            </li>
            <li>
                <a href="/users/signup" onClick={() => props.handlePageChange("SignUp")}>Sign Up</a>
            </li>
            <li>
                <a href="/itinerary" onClick={() => props.handlePageChange("Itinerary")}>Itinerary</a>
            </li>
        </ul>
    )
}

export default MainNav;