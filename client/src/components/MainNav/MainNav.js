import React from 'react';
import './MainNav.css';

// function dropNav() {
//     var x = document.getElementById("mainNav");
//     if (x.className === "nav") {
//       x.className += " responsive";
//     } else {
//       x.className = "nav";
//     }
//   }

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
            <ul className="right">
                <li onClick={() => props.handlePageChange("SignIn")}>
                    <a href="/signup">Sign In</a>
                </li>
                <li onClick={() => props.handlePageChange("SignUp")}>
                    <a href="/signup">Sign Up</a>
                </li>
            </ul>
            {/* <a href="javascript:void(0);" className="icon" onclick={dropNav()}>
                <i className="fa fa-bars"></i>
            </a> */}
        </ul>
    )
}

export default MainNav;