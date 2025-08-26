import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import {
  clearCompleted,
  deleteTodo,
  toggleTodo,
} from '../features/todos/todoSlice';
import { filterTodos } from '../utils/todoFilter';
import { getEmptyListMessage } from '../utils/todoMessages';
import { formatDate } from '../utils/formatDate';

interface TodoListProps {
  searchTerm: string;
}

function TodoList({ searchTerm }: TodoListProps) {
  const todos = useSelector((state: RootState) => state.todos.items);
  const filter = useSelector((state: RootState) => state.visibilityFilter);
  const dispatch = useDispatch();

  const filteredTodos = filterTodos(todos, filter, searchTerm);

  return (
    <div>
      <ul className="list-none p-0">
        {filteredTodos.length === 0 ? (
          <li className="text-gray-500 italic py-2">
            {searchTerm
              ? 'Нет задач, совпадающих с поиском'
              : getEmptyListMessage(filter)}
          </li>
        ) : (
          filteredTodos.map((todo) => (
            <li key={todo.id} className={`flex items-center justify-between px-2 py-3 ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
              <span
                className="flex-1 cursor-pointer hover:text-gray-900"
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Удалить
              </button>

              <small className="text-gray-400 text-xs mt-1">
                {formatDate(todo.createdAt)}
              </small>
            </li>
          ))
        )}
      </ul>

      {todos.some((todo) => todo.completed) && (
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <button
            onClick={() => dispatch(clearCompleted())}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-md cursor-pointer transition-colors"
          >
            Очистить завершённые
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
