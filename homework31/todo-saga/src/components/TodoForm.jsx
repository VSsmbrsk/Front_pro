import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todosSlice'
import { fetchTodos } from '../store/todosSlice'

function TodoForm() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    if (!text.trim()) return

    dispatch(addTodo(text))
    setText('')
  }

  const fetchHandler = e => {
    e.preventDefault()
    dispatch(fetchTodos())
  }

  return (
    <form onSubmit={submitHandler} className='form'>
      <input className='form__input' placeholder='New task' value={text} onChange={e => setText(e.target.value)} />
      <button>Add</button>
      <button onClick={fetchHandler}>Get todo</button>
    </form>
  )
}

export default TodoForm

