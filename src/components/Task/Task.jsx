import { useRef } from 'react';
import './task.css';

const Task = ({ title, description, del }) => {
  const taskTitleInput = useRef(null);
  const editButton = useRef(null);
  const saveButton = useRef(null);

  return (
    <div className='task'>
      <div className='task__title-container'>
        <input id='task__title' value={title} ref={taskTitleInput} readOnly />
      </div>
      <div className='task__description-container'>{description}</div>
      <div className='task__buttons-container'>
        <button
          className='task__edit-button'
          ref={editButton}
          onClick={() => {
            editButton.current.classList.add('hidden');
            saveButton.current.classList.remove('hidden');
          }}
        >
          Edit
        </button>
        <button
          className='task__save-button hidden'
          ref={saveButton}
          onClick={() => {
            editButton.current.classList.remove('hidden');
            saveButton.current.classList.add('hidden');
          }}
        >
          Save
        </button>
        <button id='task__delete-button' onClick={del}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
