import { createStore } from 'redux'

const actionType = {
    SET_VISIBILITY_FILTER,
    ADD_TODO
}

function visibilityFilter(state = 'SHOW_ALL', action) {
    console.log(action);
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter
    } else {
        return state
    }
}

function todos(state = [], action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{ text: action.text, completed: false }])
        case 'TOGGLE_TODO':
            return state.map((todo, index) =>
                action.index === index
                    ? { text: todo.text, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}

function todoApp(state = {}, action) {
    console.log(action);
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
}


const store = createStore(todoApp);
store.dispatch({ type: 'ADD_TODO' });
store.dispatch({ type: 'TOGGLE_TODO' });
store.dispatch({ type: 'SET_VISIBILITY_FILTER' });

export default store;