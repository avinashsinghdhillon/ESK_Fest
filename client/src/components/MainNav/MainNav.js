import React from 'react';
import './MainNav.css';

function MainNav(props) {
    return (
        <ul className="nav">
            <li>
                <a href="#">EASTSIDE KINGS FESTIVAL</a>
            </li>
            <li>
                {/* All = About = Home? */}
                <a href="/all" onClick={() => props.handlePageChange("All")}>About</a>
            </li>
            <li>
                <a href="/schedule" onClick={() => props.handlePageChange("Schedule")}>Schedule</a>
            </li>
                {/* Moved to Footer for now 8/6/19 */}
            {/* <li>
                <a href="#sponsors" onClick={() => props.handlePageChange("Sponsors")}>Sponsors</a>
            </li>
            <li>
                <a href="#privacy" onClick={() => props.handlePageChange("Privacy")}>Privacy</a>
            </li> */}
            <li>
                <a href="/faq" onClick={() => props.handlePageChange("FAQ")}>FAQ</a>
            </li>
            <li className="right" onClick={() => props.handlePageChange("SignIn")}>
                <a href="/signin">Sign In</a>
            </li>
            <li className="right" onClick={() => props.handlePageChange("SignUp")}>
                <a href="/signup">Sign Up</a>
            </li> */}
        </ul>
    )
}

export default MainNav;