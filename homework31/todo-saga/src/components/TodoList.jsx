import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
  const { items, loading } = useSelector(state => state.todos)

  if (loading) return <p>Loading...</p>

  return (
    <ul>
      {items.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
