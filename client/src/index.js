import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import './index.css';

import reducers from './reducers'
import Home from './pages/Home';
// import MainNav from './components/MainNav';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Schedule from './pages/Schedule';
import ScheduleDay from './pages/ScheduleDay';
import ScheduleVenue from './pages/ScheduleVenue';
import Sponsors from './pages/Sponsors';
import Faq from './pages/FAQ';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import About from './pages/About';
import Itinerary from './pages/Itinerary';
import Contact from './pages/Contact';
// import NoMatch from './pages/NoMatch';
// import './App.css';

import authGuard from './components/HOCs/authGuard';
// import * as actions from './actions'

axios.defaults.withCredentials = true;


ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/users/signup" component={SignUp} />
          <Route exact path="/users/signin" component={SignIn} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/scheduleday" component={ScheduleDay} />
          <Route exact path="/schedulevenue" component={ScheduleVenue} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/about" component={About} />
          <Route exact path="/itinerary" component={authGuard(Itinerary)} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/signout" component={SignIn}/> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </App>
      <Footer />
      </Provider>
  </BrowserRouter>,
  document.querySelector('#root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
