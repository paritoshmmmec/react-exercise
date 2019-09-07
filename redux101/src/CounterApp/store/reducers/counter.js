import { INCREMENT_COUNTER } from '../actions/actionTypes'

export const counter = (state = null, action) => {
    if (action.type === INCREMENT_COUNTER) {
        var error = new Error('BOOM!');
        throw error;

        return { count: state.count + 1 }
    }
    return state;
}

