import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="container">
    <main>
      <h1>Todo App with Redux</h1>
      <TodoForm />
      <TodoList />
    </main>
      <Footer />
    </div>
    </>
  );
}

export default App;
