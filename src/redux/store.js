import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { TodoReducer } from './reducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: TodoReducer,
    middleware: [thunk]
})

export { store };