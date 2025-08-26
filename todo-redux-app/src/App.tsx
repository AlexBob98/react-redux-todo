import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Мои задачи</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;