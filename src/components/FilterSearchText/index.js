import classNames from "classnames/bind";
import styles from "./FilterSearchText.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filtersSlice from "../Reducer/FiltersReducer/filtersSlice";

const cx = classNames.bind(styles);

function FilterSearchText() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleChangeSearchTextValue = (e) => {
    setSearchText(e.target.value);
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };

  return (
    <div className={cx("container")}>
      <input
        value={searchText}
        className={cx("inputSearch")}
        placeholder="input search text"
        onChange={handleChangeSearchTextValue}
      />
      <button className={cx("searchBtn")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default FilterSearchText;
