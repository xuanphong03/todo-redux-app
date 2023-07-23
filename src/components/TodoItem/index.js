import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TodoItem.module.scss";
import { useDispatch } from "react-redux";
import { completeTodo, removeTodo, saveTodo } from "../../redux/actions";
const cx = classNames.bind(styles);

function TodoItem({ id, name, completed }) {
  const [todoName, setTodoName] = useState(name);
  const [checked, setChecked] = useState(completed);
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    setChecked(!checked); // Toggle the checked state locally in the component
    dispatch(completeTodo(id)); // Toggle the completed status
  };

  const handleChangeValueTodo = (e) => {
    setTodoName(e.target.value);
  };

  const handleUpdateTodo = () => {
    setUpdate(!update);
  };

  const handleSaveTodo = () => {
    setUpdate(!update);
    dispatch(
      saveTodo({
        id: id,
        name: todoName,
        completed: checked, // Preserve the current completed status
      })
    );
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div className={cx("todo")}>
      <div className={cx("todo-item")}>
        <input
          className={cx({ checked: checked })}
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {update ? (
          <input
            type="text"
            value={todoName}
            onChange={handleChangeValueTodo}
            className={cx("todo-name")}
          />
        ) : (
          <div className={cx("todo-name", { "todo-checked": checked })}>
            {todoName}
          </div>
        )}
      </div>
      <div
        className={cx("todo-options", {
          "todo-checked": checked && !update,
        })}
      >
        {update ? (
          <button
            className={cx("btnUpdate")}
            disabled={checked}
            onClick={handleSaveTodo}
          >
            Save
          </button>
        ) : (
          <button
            className={cx("btnUpdate")}
            disabled={checked}
            onClick={handleUpdateTodo}
          >
            Update
          </button>
        )}
        <button
          onClick={handleRemoveTodo}
          className={cx("btnDelete")}
          disabled={checked}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
