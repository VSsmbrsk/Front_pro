import "./App.css";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { text, completed: false }]);
  };

  const toggleTodo = (text) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.text === text ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (text) => {
    setTodos((prev) => prev.filter((todo) => todo.text !== text));
  };

  return (
    <div className="container">
      <h1>ToDoList</h1>

      <TodoForm onAdd={addTodo} />

      <ul id="todos__wrapper">
        {todos.map((todo) => (
          <li
            key={todo.text}
            className="todo-item"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.text)}
            />

            <span>{todo.text}</span>

            <button
              className="todo-item__delete"
              onClick={() => removeTodo(todo.text)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
