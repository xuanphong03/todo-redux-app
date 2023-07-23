import { combineReducers } from "redux";

import FilterReducer from "../components/Reducer/FiltersReducer";
import TodoListReducer from "../components/Reducer/TodoListReducer";

const rootReducer = combineReducers({
  filters: FilterReducer,
  todoList: TodoListReducer,
});

export default rootReducer;
