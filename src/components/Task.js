import React, { useState } from 'react';
import './task.css';

const Task = ({ tasks }) => {
  const [options, setOptions] = useState(0);

  const handleItemClick = (x) => {
    setOptions(x.id);
    console.log('asd');
  };

  const tasksAsList = tasks.map((x) => {
    return (
      <li key={x.id} onClick={() => handleItemClick(x)}>
        {x.name}
        <br />
        {x.startDate}
        <br />
        {options === x.id ? <TaskOptions task={x} /> : ''}
      </li>
    );
  });

  return <div>{tasksAsList}</div>;
};

const TaskOptions = ({ task }) => {
  const [editMenu, setEditMenu] = useState(false);
  const handleEdit = () => {
    setEditMenu(!editMenu);
  };
  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      {editMenu ? (
        <div id="edit-menu">
          <p>😀</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Task;
