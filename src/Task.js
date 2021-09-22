import PropTypes from 'prop-types';

export default function Task({ task, toggleTask, deleteTask }) {
  return (
    <li data-testid="task-item">
      <span
        role="button"
        className={task.completed ? 'done' : null}
        onClick={() => toggleTask(task)}
        aria-hidden
      >
        {task.title}
      </span>
      {' '}
      <button type="button" onClick={(e) => deleteTask(e, task)}>
        x
      </button>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
  toggleTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

Task.defaultProps = {
  toggleTask: () => {},
  deleteTask: null,
};
