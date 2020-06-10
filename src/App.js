import React from 'react';
import './App.css'
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './helpers';
import  LandingPage from './pages/LandingPage/LandingPage';
import  Contact  from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <Router history = { history } >
        <Switch>
          <Route exact path="/" component={ LandingPage }></Route>
          <Route path="/contact" component={ Contact }></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
