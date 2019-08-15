import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from './actions'

export default function countReducers(state = {
    count: 0,
    isTabOpen: false
}, action) {
    if (action.type === INCREMENT_COUNTER) {
        return {
            ...state,
            count: state.count + action.counter
        };
    }

    if (action.type === DECREMENT_COUNTER) {
        return {
            ...state,
            count: state.count - action.counter
        };
    }

    return state;
}


