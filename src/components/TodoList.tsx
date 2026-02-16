import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import { filterTodos } from '../utils/todoFilter';
import { getEmptyListMessage } from '../utils/todoMessages';
import { AnimatePresence } from 'framer-motion';
import { TodoListProps } from '../interfaces/TodoList';
import ClearCompletedButton from './ClearCompletedButton';
import TodoItem from './TodoItem';

function TodoList({ searchTerm }: TodoListProps) {
  const todos = useSelector((state: RootState) => state.todos.items);
  const filter = useSelector((state: RootState) => state.visibilityFilter);

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
          <AnimatePresence>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                createdAt={todo.createdAt}
              />
            ))}
          </AnimatePresence>
        )}
      </ul>
      <ClearCompletedButton />
    </div>
  );
}

export default TodoList;
