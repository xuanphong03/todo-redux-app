import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todoList",
  initialState: { status: "idle", todos: [] },
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
      const todoToToggle = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.state = "idle";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
    // .addCase(updateTodo.fulfilled, (state, action) => {
    //   let currentTodo = state.todos.find(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   currentTodo = action.payload;
    // });
  },
});

export default todosSlice;

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    return data.todos;
  }
);

// export const updateTodo = createAsyncThunk("todo/updateTodo", async (id) => {
//   const res = await fetch("/api/updateTodo", {
//     method: "POST",
//     body: JSON.stringify(id),
//   });
//   const data = await res.json();
//   return data.todos;
// });
