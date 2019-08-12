import React, { Component } from 'react';
import './MainNav.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        this.props.signOut();
    }

    render() {
        return (
                <nav className="nav" id="mainNav">
                    <Link className='nav-item' to="/">Eastside Kings Festival</Link>
                        <ul className="navbar-nav mr-auto">
                        <li className='nav-item'>
                        {/* All = About = Home? */}
                        <Link className='nav-link' to="/about" >About</Link>
                        </li>
                        <li className='nav-item'>
                        <Link className='nav-link' to="/schedule">Schedule</Link>
                        </li>
                        <li className='nav-item'>
                        <Link className='nav-link' to="/faq">FAQ</Link>
                        </li>
                        <li className='nav-item'>
                        <Link className='nav-link' to="/itinerary" >Itinerary</Link>
                        </li>
                      </ul>
                    <ul className="nav navbar-nav ml-auto">
                        {!this.props.isAuth ?
                            [<li className='nav-item' key='signin'>
                                <Link className='nav-link' to='/users/signin'>Sign In</Link>
                            </li>,
                            <li className='nav-item' key='signup'>
                                <Link className='nav-link' to='/users/signup'>Sign Up</Link>
                            </li>] : null
                        }
                        {this.props.isAuth ? <li className='nav-item'>
                            <Link className='nav-link' to='/users/signout'>Sign Out</Link>
                        </li> : null}
                    </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps, actions)(MainNav);