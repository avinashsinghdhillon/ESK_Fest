// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Footer from './components/Footer';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render( [ <App key="1" />, <Footer key="2" />], document.getElementById('root'));
    
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//App.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import MainNav from './MainNav';
import './MainNav/MainNav.css';

class App extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <div>
        <MainNav />
        <div>
        { this.props.children }
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);