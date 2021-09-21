export default function Task({ task, toggleTask, deleteTask }) {
  return (
    <li data-testid="task-item">
      <span
        className={task.completed ? "done" : null}
        onClick={() => toggleTask(task)}
      >
        {task.title}
      </span>{" "}
      <button onClick={(e) => deleteTask(e, task)}>
        x
      </button>
    </li>
  )
}