export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const VisibilityFilters = {
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export const incrementCounter = (counter) => {
    return { type: INCREMENT_COUNTER, counter }
}


export const decrementCounter = (counter) => {
    return { type: DECREMENT_COUNTER, counter }
}