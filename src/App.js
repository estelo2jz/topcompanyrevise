import React from 'react';
import './App.css';
import Home from "./components/Home";

import Small from './components/Small';
import Medium from './components/Medium';
import Large from './components/Large';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Router>
      <Home />
      <div>
        <div className="app-size-container">
          <div className="app-header-container">
            <h4>BY COMPANIES SIZE : </h4>
          </div>
          <div className="app-inner-container">
            <ul>
              <li>
                <Link to="/Small">SMALL</Link>
              </li>
              <li>
                <Link to="/Medium">MEDIUM</Link>
              </li>
              <li>
                <Link to="/large">LARGE</Link>
              </li>
            </ul>
          </div>
        </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Small">
              <Small />
            </Route>
            <Route path="/Medium">
              <Medium />
            </Route>
            <Route path="/Large">
              <Large />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;