import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: []
  },
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    }
  }
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
