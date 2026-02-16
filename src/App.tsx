import { useState } from 'react';
import AddTodo from './components/AddTodo';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';
import SearchInput from './components/searchInput';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Мои задачи</h1>
      <AddTodo />
      <FilterButtons />
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      <TodoList searchTerm={searchTerm} />
    </div>
  );
}

export default App;