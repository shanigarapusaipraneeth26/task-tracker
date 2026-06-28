import { useState } from "react";
import axios from "axios";

function TaskForm({ getTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const API = "http://localhost:5000/api/tasks";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required");
      return;
    }

    await axios.post(API, {
      title,
      description,
    });

    setTitle("");
    setDescription("");
    getTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;