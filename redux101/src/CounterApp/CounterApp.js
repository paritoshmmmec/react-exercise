import React, { Component } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import CounterContainer from './CounterContainer'
import { INCREMENT_COUNTER, RECEIVE_POSTS } from './actions/actionTypes'
import { fetchPostService } from './services/postService'

const loggingMiddleware = (store) => (next) => (action) => {
    next(action);
}

const countReducer = (state = {}, action) => {
    if (action.type === INCREMENT_COUNTER) {
        return { ...state, count: state.count + 1 }
    }

    if (action.type === RECEIVE_POSTS) {
        console.log(action);
        return { ...state, posts: action.posts };
    }

    return state;
}
const initialState = {
    countReducer: {
        count: 20,
        isTabOpen: false,
        posts: []
    }
};


const rootReducer = combineReducers({
    countReducer
});


const store = createStore(rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware.withExtraArgument({ fetchPostService }), loggingMiddleware))

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