import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers'

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(ReduxPromise)
));

export default store;