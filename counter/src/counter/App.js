import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer'

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    console.log(action);
    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        };
    }

    return state;
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);

export default App;