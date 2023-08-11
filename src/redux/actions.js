export function addTodo (title) {
    console.log("Calling action", title)
    return {
        "type": "ADD_TODO",
        "title": title
    }
}

export function toggleLoading (status) {
    return {
        "type": "TOGGLE_LOADING",
        "status": status
    }
}