import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchTodos(state) {
      state.loading = true
    },
    fetchTodosSuccess(state, action) {
      state.loading = false
      state.items = action.payload
    },
    fetchTodosError(state, action) {
      state.loading = false
      state.error = action.payload
    },

    addTodo(state, action) {
      state.items.unshift({
        id: Date.now(),
        title: action.payload,
        completed: false
      })
    },
    toggleTodo(state, action) {
      const todo = state.items.find(t => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(t => t.id !== action.payload)
    },
    editTodo(state, action) {
      const { id, title } = action.payload
      const todo = state.items.find(t => t.id === id)
      if (todo) {
        todo.title = title
      }
    }

  }
})

export const {
  fetchTodos,
  fetchTodosSuccess,
  fetchTodosError,
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo
} = todosSlice.actions

export default todosSlice.reducer

