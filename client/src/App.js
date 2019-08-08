import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MainNav from './components/MainNav';
import SignUp from './components/SignUp';
import Schedule from './pages/Schedule';
import Faq from './pages/FAQ';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import SignUpCompo from './components/SignUpCompo/SignUpCompo';
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
          <Route exact path="/signup" component={SignUpCompo} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/privacy" component={Privacy} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
