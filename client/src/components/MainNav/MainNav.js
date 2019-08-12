import React, {Component} from 'react';
import './MainNav.css';
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
            <ul className="nav" id="mainNav">
                <li>
                    <a href="/">ESK Festival</a>
                </li>
                <li>
                    <a href="/schedule" onClick={() => this.props.handlePageChange("Schedule")}>Schedule</a>
                </li>
                <li>
                    <a href="/faq" onClick={() => this.props.handlePageChange("FAQ")}>FAQ</a>
                </li>
                {!this.props.isAuth ?
                    [<li>
                        <a href="/users/signin" onClick={() => this.props.handlePageChange("SignIn")}>Sign In</a>
                    </li>,
                    <li>
                        <a href="/users/signup" onClick={() => this.props.handlePageChange("SignUp")}>Sign Up</a>
                    </li>] : null
                }
                {this.props.isAuth ?
                    [<li>
                        <a href="/itinerary" onClick={() => this.props.handlePageChange("Itinerary")}><i className="fas fa-id-badge"></i></a>
                    </li>,
                    <li>
                        <a href="/signout" onClick={() => this.props.handlePageChange("SignOut")}>Sign Out</a>
                    </li>]
                    : null
                }
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