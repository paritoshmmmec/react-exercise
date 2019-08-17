import React, { Component } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import CounterContainer from './CounterContainer'
import { INCREMENT_COUNTER, RECEIVE_POSTS } from './actions/actionTypes'



const initialState = {
    count: 1,
    isTabOpen: false,
    posts: []
}

const loggingMiddleware = (store) => (next) => (action) => {
    next(action);
}

const countReducer = (state = initialState, action) => {
    if (action.type === INCREMENT_COUNTER) {
        return { ...state, count: state.count + 1 }
    }

    if (action.type === RECEIVE_POSTS) {
        console.log(action);
        return { ...state, posts: action.posts };
    }

    return state;
}



const store = createStore(combineReducers({
    countReducer
}), applyMiddleware(thunkMiddleware, loggingMiddleware))

export default class CounterApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>Hello React </div>
                <CounterContainer />
            </Provider>
        );
    }
}