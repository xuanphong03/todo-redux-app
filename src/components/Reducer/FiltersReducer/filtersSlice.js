import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "all",
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    }, // => {type: 'filters/searchFilterChange'}
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default filtersSlice;
