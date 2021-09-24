/* eslint-disable no-debugger */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import axios from './axios';
import { loadTasks } from './actionCreators';

function Tasks() {
  const tasks = useSelector((state) => state.tasks);
  const [state, setState] = useState({
    title: '',
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  function updateTitle(e) {
    setState({
      ...state,
      title: e.target.value,
    });
  }

  const saveTask = async (ev) => {
    ev.preventDefault();
    try {
      const payload = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          title: state.title,
        }),
      };
      await fetch('http://localhost:3001/tasks', payload);
      setState((prevState) => ({
        ...prevState,
        title: '',
      }));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
  };

  const deleteTask = (e) => {
    e.preventDefault(); // prevenimos el comportamiento por defecto
    // axios
    //   .delete(`http://localhost:3001/tasks/${task.id}`)
    //   .then(() => setTasks(tasks.filter((t) => t.id !== task.id)))
    //   .catch((err) => console.log(err));
  };

  const toggleTask = (task) => {
    axios
      .put(`http://localhost:3001/tasks/${task.id}`, {
        data: {
          ...task,
          completed: !task.completed,
        },
      })
      .then(() => {
        // setTasks(
        //   tasks.map((t) =>
        //     +task.id === t.id ? { ...task, completed: !task.completed } : t
        //   )
        // );
      });
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <ul className="tasks">
        {tasks.length > 0 &&
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
      </ul>
      <form onSubmit={saveTask}>
        <input type="text" value={state.title} onChange={updateTitle} />
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
}

export default Tasks;
