import { useState } from "react";

function Main() {
  const [todos, setTodos] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskText = todos.trim();
    if (!taskText) return;

    const task = {
      text: taskText,
      completed: false,
    };

    setTasks((prev) => [...prev, task]);
    setTodos("");
  };

  const toggleTask = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>ToDoList</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form__input"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
        />
        <button className="form__btn">Додати</button>
      </form>

      <ul id="todos__wrapper">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="todo-item"
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />

            <span>{task.text}</span>

            <button
              className="todo-item__delete"
              onClick={() => removeTask(index)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default  Main;
