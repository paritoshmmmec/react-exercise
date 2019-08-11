import React, { Component } from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import CounterContainer from './CounterContainer'

const initialState = {
    count: 1
}

const reducer = (state = initialState, action) => {
    console.log(state);
    console.log(action);
    return state;
}


const store = createStore(reducer)

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