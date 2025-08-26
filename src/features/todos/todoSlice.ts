import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoState = { items: Todo[] };
interface RawTodo {
  id?: number;
  text?: string;
  completed?: boolean;
}

const isTodo = (item: any): item is Todo => {
  return (
    typeof item === 'object' &&
    item !== null &&
    typeof item.id === 'number' &&
    typeof item.text === 'string' &&
    typeof item.completed === 'boolean'
  );
};


const loadState = (): TodoState => {
  try {
    const saved = localStorage.getItem('todos');
    if (saved === null) {
      return { items: [] };
    }
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed.items)) {
      return {
        items: parsed.items.filter(isTodo),
      };
    }
    return { items: [] };
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
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.items.push(newTodo);
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

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;