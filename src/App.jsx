import { useRef, useState } from 'react';
import Task from './components/Task/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const modal = useRef(null);
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  const openModalToCreateTask = () => {
    modal.current.show();
  };

  const closeModalToCancelTask = () => {
    modal.current.close();
  };

  const addTask = () => {
    const task = {};
    task.title = `${titleInput.current.value}`;
    task.description = `${descriptionInput.current.value}`;
    task.id = Math.floor(Math.random() * (1000 - 0) + 0);

    if (task.title == '' && task.description == '') {
      alert('No puede crear una tarea en blanco');
    } else {
      modal.current.close();
      titleInput.current.value = '';
      descriptionInput.current.value = '';
      setTasks(tasks.concat(task));
      console.log(task);
    }
  };

  return (
    <>
      <h1>To Do List</h1>

      <button onClick={openModalToCreateTask}>Create task</button>

      <dialog ref={modal}>
        <label>
          Título
          <br />
          <input type='text' ref={titleInput} />
        </label>
        <br />
        <br />
        <label>
          Descripción
          <br />
          <input type='text' ref={descriptionInput} />
        </label>
        <br />
        <br />
        <button onClick={closeModalToCancelTask}>Close</button>
        <button onClick={addTask}>Add</button>
      </dialog>

      <div>
        {tasks.map((task) => {
          return <Task key={task.id} title={task.title} description={task.description} />;
        })}
      </div>
    </>
  );
}

export default App;
