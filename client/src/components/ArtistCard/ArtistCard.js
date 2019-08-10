import React, { Component } from 'react';
import MoreInfo from './MoreInfo';
import './ArtistCard.css';

class ArtistCard extends Component {

    constructor(){
        super();
        this.state = { show: false }
    }

    _show = (bool) => {
        if (this.state.show === false) {
        this.setState({
            show: true
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
                        <img className="artistImage" src={ props.src } alt={props.name}/>
                        {/* <img className="artistImage" src="https://www.placehold.it/200x200" alt="placeholder artist image"/> */}
                    </div>
                    <div className="container">
                        <h4>{ props.name }</h4>
                        {/* <h4>ARTIST NAME HERE</h4> */}
                        <button className="button" onClick={this._show.bind(null, true) || this._show.bind(null, false)}>More Info</button>
                        {/* <button className="button" onClick={this._show.bind(null, false)}>Less Info</button> */}
                        {/* <button href="/eventpage" className="button" onClick={() => props.handlePageChange("EventPage")}>Event Info</button> */}
                    </div>
                </div>
                {this.state.show ? <MoreInfo/> : null}
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