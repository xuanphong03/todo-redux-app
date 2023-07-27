import { useEffect } from "react";
import TodoApp from "./components/TodoApp";
import { setupServer } from "./fakeAPIs";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./components/Reducer/TodoListReducer/todosSlice";

setupServer();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
