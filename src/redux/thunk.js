import axios from "axios"
import { addTodo, toggleLoading } from "./actions"


export const getAllWorkspaces = () => async (dispatch, getState) => {
    dispatch(toggleLoading(true))
    setTimeout(async () => {
        const request = await axios.get(
            `http://localhost:8989/admin/workspaces`,
            {
                headers: {
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0OGZmYThmLTU4NzctNGRiOC1iMGIyLWM1MjQzYTVhY2UzZiIsImVtYWlsIjoiYWRtaW5AZmFuYmFzZWFpLmNvbSIsIm5hbWUiOiJGYW5iYXNlIiwidHlwZSI6ImFjY2VzcyIsInJvbGVzIjpbImFkbWluIiwidXNlciJdLCJpYXQiOjE2OTE1NzQ2NjEsImV4cCI6MTY5NDE2NjY2MSwiYXVkIjoiZmFuYmFzZWFpLWRldmVsb3BtZW50IiwiaXNzIjoiZmFuYmFzZWFpLmNvbSJ9.dCUhD-zEmS-1OQaaZP3Td8nkZxESUQh9vU9_OzSYwiM`
                }
            }
        )
        const response = request.data;
        dispatch(addTodo(response.response[0].name))
        dispatch(toggleLoading(false)) 
    }, 10000)
}