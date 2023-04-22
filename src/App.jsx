import { useRef } from 'react';
import './App.css';

function App() {
  const list = [];

  const modal = useRef(null);

  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  const createTask = () => {
    modal.current.show();

    /*const task = {};
    task.title = `Heading ${Math.floor(Math.random() * (10 - 1) + 1)}`;
    task.author = `${authors[Math.floor(Math.random() * (4 - 0) + 0)]}`;

    list.push(task);
    console.log(list);*/
  };

  const addTask = () => {
    const task = {};
    task.title = `${titleInput.current.value}`;
    task.description = `${descriptionInput.current.value}`;

    if (task.title == '' && task.description == '') {
      console.error('No puedes crear una tarea sin datos.');
    } else {
      list.push(task);
      console.log(list);
      modal.current.close();
    }
  };

  const cancelTask = () => {
    modal.current.close();
  };

  return (
    <>
      <h1>To Do List</h1>

      <button onClick={createTask}>Create task</button>

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
        <button onClick={cancelTask}>Close</button>
        <button onClick={addTask}>Add</button>
      </dialog>
    </>
  );
}

export default App;
