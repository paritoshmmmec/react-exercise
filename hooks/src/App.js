import React from 'react';
import Counter from './CounterApp/Counter'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Show Counter Example</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Counter} />
      </div>
    </Router>
  );
}

export default App;
