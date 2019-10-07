import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login.js';
import {Friends} from './components/Friends.js';
import PrivateRoute from './components/PrivateRoute.js';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <ul className='ul-App'>
        <li>
          <Link className='li-login' to='/login'>Login</Link>
        </li>
        <li className='li-friends'>
          <Link to='/friends'>Friends</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/friends" component={Friends} />
        <Route path="/login" component={Login}/>
        <Route component={Login} />   
      </Switch>
      </div>
    </Router>
  );
}

export default App;
