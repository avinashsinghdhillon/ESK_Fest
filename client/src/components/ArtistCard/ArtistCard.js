import React from 'react';
import './ArtistCard.css';

function ArtistCard(props) {
    return (
    <div className="card">
        <div className="image">
            <img src="https://www.placehold.it/150x150" alt="artist"/>
        </div>
        <div className="container">
            <h4>Artist Name HERE</h4>
            <button href="#artistBio" className="button" onClick={() => props.handlePageChange("ArtistBio")}>About</button>
            <button href="#eventPage" className="button" onClick={() => props.handlePageChange("EventPage")}>Event Info</button>
        </div>
    </div>
    )
}

export default ArtistCard;