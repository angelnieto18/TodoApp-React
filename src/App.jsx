import { useRef, useState } from 'react';
import Task from './components/Task/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [id, setId] = useState(0);
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
    setTitle((title = titleInput.current.value));
    task.title = title;
    setDescription((description = descriptionInput.current.value));
    task.description = description;
    setId(id + 1);
    task.id = id;

    if (task.title == '' && task.description == '') {
      alert('No puede crear una tarea en blanco');
    } else {
      closeModalAfterAddTask();
      setTasks(tasks.concat(task));
    }
  };

  const closeModalAfterAddTask = () => {
    modal.current.close();
    titleInput.current.value = '';
    descriptionInput.current.value = '';
  };

  const deleteTask = (id) => {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
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

      <div className='tasks__container '>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
              del={() => {
                deleteTask(task.id);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
