import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../app/store';
import { toggleTodo, deleteTodo } from "../features/todos/todoSlice";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.8rem 0",
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "#888" : "#000",
          }}
        >
          <span
            style={{ cursor: "pointer", flex: 1 }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            style={{
              color: "red",
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
