import React from 'react';
import './MainNav.css';

function MainNav(props) {
    return (
        <ul className="nav">
            <li>
                <a href="#">EASTSIDE KINGS FESTIVAL</a>
            </li>
            <li>
                <a href="#all" onClick={() => props.handlePageChange("All")}>About</a>
            </li>
            <li>
                <a href="#schedule" onClick={() => props.handlePageChange("Schedule")}>Schedule</a>
            </li>
            <li>
                <a href="#sponsors" onClick={() => props.handlePageChange("Sponsors")}>Sponsors</a>
            </li>
            <li>
                <a href="#faq" onClick={() => props.handlePageChange("FAQ")}>FAQ</a>
            </li>
            <li className="right" onClick={() => props.handlePageChange("SignIn")}>
                <a href="#">Sign In</a>
            </li>
            <li className="right" onClick={() => props.handlePageChange("SignUp")}>
                <a href="#">Sign Up</a>
            </li>
        </ul>
    )
}

export default MainNav;