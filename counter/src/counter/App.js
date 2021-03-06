import React from 'react';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer'
import store from './store/store'

const App = () => {
    return <Provider store={store}>
        <CounterContainer />
    </Provider>
};

export default App;