import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos.items);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
