import React, { Component } from 'react';
import MoreInfo from './MoreInfo';
import Logo from '../../images/ESK-FOUNDATION-LOGO.png';
import './ArtistCard.css';

class ArtistCard extends Component {

    state = {
        show: false,
        artistName: "",
        artistSpotify: "",
        artistYoutube: "",
    }

    _show = (bool) => {
        if (this.state.show === false) {
            this.setState({
                show: true,
                artistName: this.props.name,
                artistSpotify: this.props.spotify,
                artistYoutube: this.props.youtube
            });
        } else {
            this.setState({
                show: false
            })
        }
    }

    render(props) {
        return (
            <div>
                <div className="card">
                    <div className="image">
                        <img className="artistImage" src={this.props.src || Logo} alt={this.props.name}/>
                        {/* <img className="artistImage" src="https://www.placehold.it/200x200" alt="placeholder artist image"/> */}
                    </div>
                    <div className="container">
                        <h4>{this.props.name}</h4>
                        {/* <h4>ARTIST NAME HERE</h4> */}
                        <button className="button" onClick={this._show.bind(null, true) || this._show.bind(null, false)}>More Info</button>
                        {/* <button className="button" onClick={this._show.bind(null, false)}>Less Info</button> */}
                        {/* <button href="/eventpage" className="button" onClick={() => props.handlePageChange("EventPage")}>Event Info</button> */}
                    </div>
                </div>
                {this.state.show 
                ? <MoreInfo 
                    name={this.state.artistName}
                    spotify={this.state.spotify}
                    youtube={this.state.youtube}/> 
                : null}
            </div>
            )
    }
}


// function ArtistCard(props) {
//     return (
//     <div className="card">
//         <div className="image">
//             <img className="artistImage" src={ props.src } alt={props.name}/>
//         </div>
//         <div className="container">
//             <h4>{ props.name }</h4>
//             <button href="/more" className="button" onClick={() => props.handlePageChange("MoreInfo")}>More Info</button>
//             {/* <button href="/eventpage" className="button" onClick={() => props.handlePageChange("EventPage")}>Event Info</button> */}
//         </div>
//     </div>
//     )
// }

export default ArtistCard;