import { useRef, useState } from 'react';
import Task from './components/Task/Task';
import taskTitleInput from './components/Task/Task';
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
      modal.current.close();
      titleInput.current.value = '';
      descriptionInput.current.value = '';
      setTasks(tasks.concat(task));
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
          return (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
              del={() => {
                setTasks(
                  tasks.filter((t) => {
                    return t.id !== task.id;
                  })
                );
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
