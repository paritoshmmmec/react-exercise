import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension';
import CounterContainer from './CounterContainer'
import reducer from './store/reducers'


const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(ReduxPromise)
));

const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);

export default App;