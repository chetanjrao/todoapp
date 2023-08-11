
const INITIAL_STATE = {
    tasks: [],
    isLoading: false
}

export function TodoReducer (state = INITIAL_STATE, action) {
    console.log(state, action)
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                tasks: [...state.tasks, action.title]
            }
        case "TOGGLE_LOADING":
            return {
                ...state,
                isLoading: action.status
            }
        default:
            return state;
    }
    
}