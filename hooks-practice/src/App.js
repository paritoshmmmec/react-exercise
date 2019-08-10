import React from 'react';
import randomFunction from './hooks/AppHooks'
import UserFrom from './presentation/UserForm'
import UserDetails from './presentation/UserDetails'
import './App.css';

const {appState, setFirstName, setLastName, setTermsCondition } = randomFunction();

function App() {


  return (
    <div className="App">
      <UserDetails {...appState} />
      <UserFrom
        setFirstName={setFirstName}
        setLastName={setLastName}
        setTermsCondition={setTermsCondition}
      />
    </div>
  );
}

export default App;
