import React, { useState } from 'react';
import './App.css';

function App() {
  const [app, setAppState] = useState({
    firstName: '',
    lastName: '',
    isTermConditionSigned: false
  })


  return (
    <div className="App">
      <div>
        <p> First Name: {app.firstName}</p>
        <p> Last Name: {app.lastName}</p>
        <p> Condition Signed: {app.isTermConditionSigned.toString()}</p>
      </div>
      <div>
        <input type="text"
          placeholder="First Name"
          onChange={(e) => { setAppState({ ...app, firstName: e.target.value }) }} />
        <input type="text"
          placeholder="Last Name"
          onChange={(e) => { setAppState({ ...app, lastName: e.target.value }) }} />
        <input type="checkbox"
          onChange={(e) => { setAppState({ ...app, isTermConditionSigned: e.target.checked }) }} />
      </div>

    </div>
  );
}

export default App;
