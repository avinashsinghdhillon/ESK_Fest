import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <ul>
                <li><a href="/sponsors" onClick={() => props.handlePageChange("Sponsors")}>Sponsors</a></li>
                <li><a href="/privacy" onClick={() => props.handlePageChange("Privacy")}>Privacy</a></li>
                <li><a href="/contact" onClick={() => props.handlePageChange("Contact")}>Contact Us</a></li>
            </ul>
            <p>©2019 Endemic Design</p>
            <p>This project is supported in part by the Cultural Arts Division of the City of Austin Economic Development Department.</p>
        </div>
    )
}

export default Footer;