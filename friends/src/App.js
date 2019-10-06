import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login.js';
import {Friends} from './components/Friends.js';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <ul className='ul-App'>
        <li className='li-App'>
          <Link to='/login'>Login</Link>
        </li>
        <li className='li-App'>
          <Link to='/friends'>Friends</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/friends" component={Friends} />
        <Route path="/login" component={Login}/>
        <Route component={Login} />   
      </Switch>
      </div>
    </Router>
  );
}

export default App;
