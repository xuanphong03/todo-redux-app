const initState = {
  search: "",
  status: "all",
};

const FilterReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default FilterReducer;
