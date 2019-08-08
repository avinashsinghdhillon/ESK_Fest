import React from 'react';
import './ArtistCard.css';

function ArtistCard(props) {
    return (
    <div className="card">
        <div className="image">
            <img src={"https://www.placehold.it/150x150" || props.src } alt={props.name}/>
        </div>
        <div className="container">
            <h4>{ props.name }</h4>
            <button href="/artistbio" className="button" onClick={() => props.handlePageChange("ArtistBio")}>About</button>
            <button href="/eventpage" className="button" onClick={() => props.handlePageChange("EventPage")}>Event Info</button>
        </div>
    </div>
    )
}

export default ArtistCard;