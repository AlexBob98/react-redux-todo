import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { toggleTodo, deleteTodo } from "../features/todos/todoSlice";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.items);
  const filter = useSelector((state: RootState) => state.visibilityFilter);
  const dispatch = useDispatch();

const filteredTodos = todos.filter((todo) => {
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

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {filteredTodos.length === 0 ? (
        <li style={{ color: "#888", fontStyle: "italic", padding: "0.5rem 0" }}>
          {filter === "all"
            ? "Нет задач"
            : filter === "active"
            ? "Нет активных задач"
            : "Нет завершённых задач"}
        </li>
      ) : (
        filteredTodos.map((todo) => (
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
        ))
      )}
    </ul>
  );
}

export default TodoList;
