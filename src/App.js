import { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const API = "http://localhost:5000/api/tasks";

  const getTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <TaskForm getTasks={getTasks} />
      <TaskList tasks={tasks} getTasks={getTasks} />
    </div>
  );
}

export default App;