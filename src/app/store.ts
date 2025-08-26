import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';
import filterReducer from '../features/todos/filterSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    visibilityFilter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;