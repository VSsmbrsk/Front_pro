import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./store/todosSlice.js";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  return (
    <>
    <div className="container">
    <main>
      <h1>Todo App with Redux-saga</h1>
      <TodoForm />
      <TodoList />
    </main>
      <Footer />
    </div>
    </>
  );
}

export default App;