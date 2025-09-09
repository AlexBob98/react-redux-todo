import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../features/todos/todoSlice';
import { RootState } from '../app/store';

function ClearCompletedButton() {
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch();

  if (!todos.some(todo => todo.completed)) return null;

  return (
    <div className="my-12">
      <button
        onClick={() => dispatch(clearCompleted())}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-md cursor-pointer transition-colors"
      >
        Очистить завершённые
      </button>
    </div>
  );
}

export default ClearCompletedButton;