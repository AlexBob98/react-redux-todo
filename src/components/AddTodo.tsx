import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

function AddTodo() {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  const inputClasses = 'px-4 py-3 w-[30rem] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
      <input
        id="new-todo"
        name="new-todo"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Что нужно сделать?"
        className={ inputClasses }
      />
      <button type="submit" className="ml-0 sm:ml-4 px-5 py-3 bg-blue-400 text-white hover:bg-blue-600">
        Добавить
      </button>
    </form>
  );
}

export default AddTodo;
