import React, {Component} from 'react';
import './MainNav.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <ul className="nav" id="mainNav">
                <li>
                    <Link to="/">ESK Festival</Link>
                </li>
                <li>
                    <Link to="/schedule" onClick={() => this.props.handlePageChange("Schedule")}><FontAwesomeIcon icon="calendar-alt" /> Schedule</Link>
                </li>
                <li>
                    <Link to="/faq" onClick={() => this.props.handlePageChange("FAQ")}><FontAwesomeIcon icon="question-circle" /> FAQ</Link>
                </li>
                <div className="account-links">
                {!this.props.isAuth ?
                    [<li>
                        <Link to="/users/signin" onClick={() => this.props.handlePageChange("SignIn")}><FontAwesomeIcon icon="sign-in-alt" /> Sign In</Link>
                    </li>,
                    <li>
                        <Link to="/users/signup" onClick={() => this.props.handlePageChange("SignUp")}>Sign Up</Link>
                    </li>] : null
                }
                {this.props.isAuth ?
                    [<li>
                        <Link to="/itinerary" onClick={() => this.props.handlePageChange("Itinerary")}><FontAwesomeIcon icon="clipboard-list" /> Itinerary</Link>
                    </li>,
                    <li>
                        <Link to="/signout" onClick={() => this.props.handlePageChange("SignOut")}><FontAwesomeIcon icon="sign-out-alt" /> Sign Out</Link>
                    </li>]
                    : null
                }
                </div>
            </ul>
       )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps, actions)(MainNav);