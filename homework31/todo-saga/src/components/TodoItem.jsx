import { useState } from 'react'
import { useDispatch } from 'react-redux'


function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(todo.title)

  const handleBlur = () => {
  if (!value.trim()) {
    setValue(todo.title) 
    setEditing(false)
    return
  }

  dispatch({
    type: 'todos/editTodoSaga',
    payload: { id: todo.id, title: value }
  })

  setEditing(false)
}

const handleSave = () => {
  if (!value.trim()) {
    setValue(todo.title)
    setEditing(false)
    return
  }

  dispatch({
    type: 'todos/editTodoSaga',
    payload: { id: todo.id, title: value }
  })

  setEditing(false)
}


const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    handleSave()
  }

  if (e.key === 'Escape') {
    setValue(todo.title) 
    setEditing(false)
  }
}

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          dispatch({ type: 'todos/toggleTodoSaga', payload: todo.id })
        }
      />

      {editing ? (
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setEditing(true)}>
          {todo.title}
        </span>
      )}

      <div className='todoitem__btns'>
        <button onClick={() => setEditing(true)}>Edit</button>

      <button
        onClick={() =>
          dispatch({ type: 'todos/deleteTodoSaga', payload: todo.id })
        }
      >
        ❌
      </button>
      </div>
    </li>
  )
}

export default TodoItem
