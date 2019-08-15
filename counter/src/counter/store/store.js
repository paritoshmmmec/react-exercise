import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension';
import countReducers from './countReducers'

const store = createStore(countReducers, composeWithDevTools(
    applyMiddleware(ReduxPromise)
));

export default store;