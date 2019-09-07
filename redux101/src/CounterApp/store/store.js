import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middlewares/logger'
import crashReporter from './middlewares/crashReporter'
import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from './enhancers/monitorReducer'
import { counter } from './reducers'

const preloadedState = {
    counter: {
        count: 20,
        isTabOpen: false,
        posts: []
    }
};

const rootReducer = combineReducers({
    counter: counter
})

export default function configureStore() {
    const middlewares = [loggerMiddleware, crashReporter, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}