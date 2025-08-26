import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface TodoState { items: Todo[] }

const loadState = (): TodoState => {
  try {
    const saved: string | null = localStorage.getItem('todos');
    if (saved === null) {
      return { items: [] };
    }
    return JSON.parse(saved);
  } catch (e) {
    console.warn('Failed to load state from localStorage', e);
    return { items: [] };
  }
};

const initialState: TodoState = loadState();

const saveState = (state: TodoState) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('todos', serialized);
  } catch (e) {
    console.warn('Failed to save state to localStorage', e);
  }
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString().split('T')[0],
      };
      state.items.push(newTodo);
      saveState(state);
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
      saveState(state);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveState(state);
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
      saveState(state);
    },
  }
});

export const { addTodo, clearCompleted, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;