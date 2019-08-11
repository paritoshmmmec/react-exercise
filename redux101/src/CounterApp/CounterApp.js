import React, { Component } from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import CounterContainer from './CounterContainer'

const initialState = {
    count: 1,
    isTabOpen: false
}

const countReducer = (state = initialState, action) => {
    console.log(state);
    if (action.type === 'INCREMENT') {
        return { ...state, count: state.count + 1 }
    }
    return state;
}

const store = createStore(countReducer)

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