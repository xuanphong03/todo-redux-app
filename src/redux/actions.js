// actions creator => function

export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const saveTodo = (data) => {
  return {
    type: "todoList/saveTodo",
    payload: data,
  };
};

export const removeTodo = (id) => {
  return {
    type: "todoList/removeTodo",
    payload: id,
  };
};

export const completeTodo = (id) => {
  return {
    type: "todoList/completeTodo",
    payload: id,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};
