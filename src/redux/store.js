import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Reducer/FiltersReducer/filtersSlice";
import todosSlice from "../components/Reducer/TodoListReducer/todosSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default store;
