import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, { payload }) => {
      state.todoList.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.todoList = state.todoList.filter(({ id }) => id !== payload);
    },
    toggleTodo(state, { payload }) {
      const todo = state.todoList.find(({ id }) => id === payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
   ,
  },
});

export const { saveTodo, deleteTodo,toggleTodo } = todoSlice.actions;
export const selecteTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
