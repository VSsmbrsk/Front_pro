import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects'
import {
  fetchTodos,
  fetchTodosSuccess,
  fetchTodosError
} from './todosSlice'
import { editTodo, deleteTodo, addTodo, toggleTodo } from './todosSlice'

function* addTodoWorker(action) {
  const title = action.payload

  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        completed: false
      })
    })

    const data = yield response.json()

    yield put(addTodo(data.title))
  } catch (e) {
    console.error('Add failed', e)
  }
}


function* toggleTodoWorker(action) {
  const id = action.payload

  try {
    yield call(fetch, `https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true }) 
    })

    yield put(toggleTodo(id))
  } catch (e) {
    console.error('Toggle failed', e)
  }
}


function* deleteTodoWorker(action) {
  const id = action.payload

  try {
    yield call(fetch, `https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE'
    })

    yield put(deleteTodo(id))
  } catch (e) {
    console.error('Delete failed', e)
  }
}


function* editTodoWorker(action) {
  const { id, title } = action.payload

  try {
    yield call(fetch, `https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })

    yield put(editTodo({ id, title }))
  } catch (e) {
    console.error('Edit failed', e)
  }
}

export function* todosSaga() {
  yield takeEvery('todos/editTodoSaga', editTodoWorker)
  yield takeEvery('todos/deleteTodoSaga', deleteTodoWorker)
  yield takeEvery('todos/toggleTodoSaga', toggleTodoWorker)
  yield takeEvery('todos/addTodoSaga', addTodoWorker)
}

function* fetchTodosWorker() {
  try {
    const response = yield call(
      fetch,
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    )
    const data = yield response.json()

    yield put(fetchTodosSuccess(data))
  } catch (error) {
    yield put(fetchTodosError(error.message))
  }
}

function* fetchTodosWatcher() {
  yield takeLatest(fetchTodos.type, fetchTodosWorker)
}

export default function* rootSaga() {
  yield all([
    fetchTodosWatcher(),
    todosSaga() 
  ])
}
