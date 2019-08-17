import { INCREMENT_COUNTER } from './actionTypes'

export const incrementCounter = (count) => {
    return {
        type: INCREMENT_COUNTER,
        count
    }
}