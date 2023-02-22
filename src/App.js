import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const stateTasks = useSelector(state => state.tasks)
  console.log(stateTasks)

  return (
    <div className="App">
      <h1>Hello World</h1>

      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;