import React, { Component } from 'react'
import { Provider } from 'react-redux'
import CounterContainer from './CounterContainer'
import store from './store'


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