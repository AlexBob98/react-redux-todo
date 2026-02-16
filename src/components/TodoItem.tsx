import { formatDate } from '../utils/formatDate';
import { motion } from 'framer-motion';
import { Todo } from '../interfaces/TodoSlice';
import { toggleTodo, deleteTodo } from '../features/todos/todoSlice';
import { useDispatch } from 'react-redux';

function TodoItem({ id, text, completed, createdAt }: Todo) {
  const dispatch = useDispatch();

  return (
    <motion.li
      key={id}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10, height: 0, margin: 0, padding: 0, overflow: 'hidden' }}
      transition={{ duration: 0.2 }}
      className={`flex items-center justify-between px-2 py-3 transition-all duration-300 ease-in-out ${completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}
    >
      <span
        className="flex-1 cursor-pointer hover:text-gray-900"
        onClick={() => dispatch(toggleTodo(id))}
      >
        {text}
      </span>
      <button
        onClick={() => dispatch(deleteTodo(id))}
        className="text-red-500 hover:text-red-700 text-sm font-medium ml-2"
      >
        Удалить
      </button>
      <small className="text-gray-400 text-xs mt-1 ml-2 whitespace-nowrap">
        {formatDate(createdAt)}
      </small>
    </motion.li>
  );
}

export default TodoItem;