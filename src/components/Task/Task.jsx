const Task = ({ title, description }) => {
  return (
    <div className='task'>
      <div className='task__title-container'>
        <h2 id='#task__title'>{title}</h2>
      </div>
      <div className='task__description-container'>{description}</div>
    </div>
  );
};

export default Task;
