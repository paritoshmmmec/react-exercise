import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import CounterContainer from './CounterContainer'

const initialState = {
    count: 1,
    isTabOpen: false
}

const orderInitialState = {
    orders: [{ id: 1, amount: 10 }]
}

const countReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        console.log(state);
        return { ...state, count: state.count + 1 }
    }
    if (action.type === 'ORDER') {
        console.log(state);
        return { ...state, count: state.count - 1 }
    }
    return state;
}

const orderReducer = (state = orderInitialState, action) => {
    if (action.type === 'ORDER') {
        console.log(state);
        return state
    }
    return state;
}

const store = createStore(combineReducers({
    orderReducer,
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