import { combineReducers } from "redux";

import filtersSlice from "../components/Reducer/FiltersReducer/filtersSlice";
import todosSlice from "../components/Reducer/TodoListReducer/todosSlice";

const rootReducer = combineReducers({
  filters: filtersSlice,
  todoList: todosSlice,
});

export default rootReducer;
