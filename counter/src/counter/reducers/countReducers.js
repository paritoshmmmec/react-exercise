const initialState = {
    count: 0,
    isTabOpen: false
};


 export default function reducer(state = initialState, action) {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            count: state.count + 1
        };
    }

    return state;
}


