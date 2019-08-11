import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MainNav from './components/MainNav';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Schedule from './pages/Schedule';
import ScheduleDay from './pages/ScheduleDay';
import ScheduleVenue from './pages/ScheduleVenue';
import Sponsors from './pages/Sponsors';
import Faq from './pages/FAQ';
// import Footer from './components/Footer';
import Privacy from './components/Privacy';
import About from './pages/About';
import Itinerary from './pages/Itinerary';
//import SignUpCompo from './components/SignUpCompo/SignUpCompo';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <MainNav />
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
          <Route exact path="/itinerary" component={Itinerary} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
