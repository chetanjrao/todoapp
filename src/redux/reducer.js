
const INITIAL_STATE = {
    tasks: [],
    isLoading: false
}

export function TodoReducer (state = INITIAL_STATE, action) {
    console.log(state, action)
    if (action.title) {
        return {
            ...state,
            tasks: [...state.tasks, action.title]
        }
    }
    return state;
    
}