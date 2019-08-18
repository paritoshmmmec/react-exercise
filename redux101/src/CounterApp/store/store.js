import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import monitorReducersEnhancer from './enhancers/monitorReducers'
//import loggerMiddleware from './middleware/logger'
import { counter } from './reducers'

const initialState = {
    counter: {
        count: 20,
        isTabOpen: false,
        posts: []
    }
};


export default function configureStore() {
    const store = createStore(combineReducers({ counter }), initialState)

    return store
}