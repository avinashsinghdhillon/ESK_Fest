import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <ul>
                <li><a href="#sponsors" onClick={() => props.handlePageChange("Sponsors")}>Sponsors</a></li>
                <li><a href="#privacy" onClick={() => props.handlePageChange("Privacy")}>Privacy</a></li>
                <li><a href="#contactus" onclick={() => props.handlePageChange("Contact")}>Contact Us</a></li>
            </ul>
            <p>©2019 Endemic Design</p>
        </div>
    )
}

export default Footer;