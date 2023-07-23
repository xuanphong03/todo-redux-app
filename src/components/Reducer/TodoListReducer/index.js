const initState = [
  { id: 1, name: "Learn Yoga", completed: false },
  { id: 2, name: "Learn JSX", completed: true },
  { id: 3, name: "Learn Ruby", completed: true },
];

const TodoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/saveTodo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.name }
          : todo
      );

    case "todoList/removeTodo":
      return state.filter((todo) => todo.id !== action.payload);

    case "todoList/completeTodo":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed } // Toggle the completed status
          : todo
      );

    default:
      return state;
  }
};

export default TodoListReducer;
