import { Todo } from '../features/todos/todoSlice';

export const filterTodos = (todos: Todo[], filter: string, searchTerm: string = '') => {
  return todos
    .filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((todo) => {
      switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      case 'all':
      default:
        return true;
      }
    });
};
