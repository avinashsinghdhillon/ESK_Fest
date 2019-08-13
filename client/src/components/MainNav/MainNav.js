import React, {Component} from 'react';
import './MainNav.css';
import { connect } from 'react-redux';
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
                <li key="eskmain">
                    <a href="/">ESK Festival</a>
                </li>
                <li key="schedule">
                    <a href="/schedule" onClick={() => this.props.handlePageChange("Schedule")}><FontAwesomeIcon icon="calendar-alt" /> Schedule</a>
                </li>
                <li key="faq">
                    <a href="/faq" onClick={() => this.props.handlePageChange("FAQ")}><FontAwesomeIcon icon="question-circle" /> FAQ</a>
                </li>
                <div className="account-links">
                {!this.props.isAuth ?
                    [<li key="signin">
                        <a href="/users/signin" onClick={() => this.props.handlePageChange("SignIn")}><FontAwesomeIcon icon="sign-in-alt" /> Sign In</a>
                    </li>,
                    <li key="signup">
                        <a href="/users/signup" onClick={() => this.props.handlePageChange("SignUp")}>Sign Up</a>
                    </li>] : null
                }
                {this.props.isAuth ?
                    [<li key="itinerary">
                        <a href="/itinerary" onClick={() => this.props.handlePageChange("Itinerary")}><FontAwesomeIcon icon="clipboard-list" /> Itinerary</a>
                    </li>,
                    <li key="signout">
                        <a href="/signout" onClick={this.signOut}><FontAwesomeIcon icon="sign-out-alt" /> Sign Out</a>
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