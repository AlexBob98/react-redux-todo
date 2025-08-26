import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Что нужно сделать?"
        style={{ padding: "0.8rem", width: "30rem" }}
      />
      <button
        type="submit"
        style={{ marginLeft: "1rem", padding: "0.8rem 1.2rem" }}
      >
        Добавить
      </button>
    </form>
  );
}

export default AddTodo;
