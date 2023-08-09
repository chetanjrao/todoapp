export function addTodo (title) {
    console.log("Calling action", title)
    return {
        "type": "ADD_TODO",
        "title": title
    }
}