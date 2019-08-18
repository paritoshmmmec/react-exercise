import { INCREMENT_COUNTER } from '../../constants/actionTypes'

export const counter = (state = null, action) => {
    if (action.type === INCREMENT_COUNTER) {
        return { count: state.count + 1 }
    }
    return state;
}

