import React from 'react';
import Counter from './PrimitiveHooksApp/Counter'
import ObjectHooks from './ObjectHooksApp/ObjectHooks'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Show Counter Hooks Example</Link>
          </li>
          <li>
            <Link to="/object">Show Object Hooks Example</Link>
          </li>
        </ul>

        <hr />


        <Route exact path="/" component={Counter} />
        <Route exact path="/object" component={ObjectHooks} />
      </div>
    </Router>
  );
}

export default App;
