import classNames from "classnames/bind";
import styles from "./FilterByStatus.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filtersSlice from "../Reducer/FiltersReducer/filtersSlice";

const cx = classNames.bind(styles);

function FilterByStatus() {
  const [filterStatus, setFilterStatus] = useState("all");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFilterStatus(e.target.value);
    dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
  };

  return (
    <div className={cx("container")}>
      <div className={cx("wrapper-input")}>
        <input
          className={cx("input-status")}
          type="radio"
          id="all"
          name="fav_language"
          value="all"
          checked={filterStatus === "all"}
          onChange={handleChange}
        />
        <label className={cx("input-label")} htmlFor="html">
          All
        </label>
      </div>
      <div className={cx("wrapper-input")}>
        <input
          className={cx("input-status")}
          type="radio"
          id="completed"
          name="fav_language"
          value="completed"
          checked={filterStatus === "completed"}
          onChange={handleChange}
        />
        <label className={cx("input-label")} htmlFor="css">
          Completed
        </label>
      </div>
      <div className={cx("wrapper-input")}>
        <input
          className={cx("input-status")}
          type="radio"
          id="todo"
          name="fav_language"
          value="todo"
          checked={filterStatus === "todo"}
          onChange={handleChange}
        />
        <label className={cx("input-label")} htmlFor="javascript">
          Todo
        </label>
      </div>
    </div>
  );
}

export default FilterByStatus;
