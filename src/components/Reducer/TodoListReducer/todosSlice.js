import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn Yoga", completed: false },
    { id: 2, name: "Learn JSX", completed: true },
    { id: 3, name: "Learn Ruby", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    saveTodo: (state, action) => {
      const { id, name } = action.payload;
      const todoToUpdate = state.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.name = name;
      }
    },

    removeTodo: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((todo) => todo.id !== idToRemove);
    },

    toggleTodoStatus: (state, action) => {
      const todoToToggle = state.find((todo) => todo.id === action.payload);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },
  },
});
