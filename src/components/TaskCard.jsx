import axios from "axios";

function TaskCard({ task, getTasks }) {
  const API = "http://localhost:5000/api/tasks";

  const deleteTask = async () => {
    await axios.delete(`${API}/${task._id}`);
    getTasks();
  };

  const completeTask = async () => {
    await axios.put(`${API}/${task._id}`, {
      ...task,
      status: "Completed",
    });
    getTasks();
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>

      <button onClick={completeTask}>Complete</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskCard;