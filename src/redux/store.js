import { configureStore } from '@reduxjs/toolkit'
import { TodoReducer } from './reducer';

const store = configureStore({
    reducer: TodoReducer
})

export { store };