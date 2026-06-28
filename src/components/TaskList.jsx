import TaskCard from "./TaskCard";

function TaskList({ tasks, getTasks }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <h3>No Tasks Available</h3>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            getTasks={getTasks}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;