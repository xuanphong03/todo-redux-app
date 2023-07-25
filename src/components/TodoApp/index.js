import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./TodoApp.module.scss";
import FilterSearchText from "../FilterSearchText";
import FilterByStatus from "../FilterByStatus";
import TodoItem from "../TodoItem";
import { v4 as uuidv4 } from "uuid";
import { todoRemainingSelector } from "../../redux/selector";
import todosSlice from "../Reducer/TodoListReducer/todosSlice";

const cx = classNames.bind(styles);

function TodoApp() {
  const [todoName, setTodoName] = useState("");
  const TodoList = useSelector(todoRemainingSelector);
  const dispatch = useDispatch();

  const handleChangeInputValue = (e) => {
    setTodoName(e.target.value);
  };

  const handleAddBtnClick = () => {
    // dispatch
    dispatch(
      todosSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
      })
    );
    setTodoName("");
  };

  return (
    <div className={cx("container")}>
      <h1 className={cx("todo-title")}>TODO APP with REDUX</h1>
      <div className={cx("input")}>
        <span className={cx("filterName")}>Search</span>
        <FilterSearchText />
      </div>
      <div className={cx("input")}>
        <span className={cx("filterName")}>Filter by Status</span>
        <FilterByStatus />
      </div>
      <h4>TODO LIST</h4>
      <div className={cx("todo-list")}>
        {TodoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              completed={todo.completed}
            />
          );
        })}
      </div>
      <div className={cx("todoAdd")}>
        <input
          value={todoName}
          onChange={handleChangeInputValue}
          className={cx("inputTodo")}
          placeholder="Enter todo name..."
        />
        <button className={cx("btnAdd")} onClick={handleAddBtnClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoApp;
