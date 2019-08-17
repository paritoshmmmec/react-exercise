import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import CounterContainer from './CounterContainer'
import { INCREMENT_COUNTER } from './actions/actionTypes'

const initialState = {
    count: 1,
    isTabOpen: false
}

const countReducer = (state = initialState, action) => {
    if (action.type === INCREMENT_COUNTER) {
        console.log(state);
        return { ...state, count: state.count + 1 }
    }
    return state;
}



const store = createStore(combineReducers({
    countReducer
}))

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