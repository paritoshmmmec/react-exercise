import React from 'react';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer'
import store from './store/store'
import { incrementCounter, decrementCounter } from './store/actions';

const App = () => {
    return <Provider store={store}>
        <CounterContainer />
    </Provider>
};

export default App;