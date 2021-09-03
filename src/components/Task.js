import React, { useState } from 'react';
import './task.css';
import obi from '../res/hello-there-obi-wan.gif';

const Task = ({ props }) => {
  const [options, setOptions] = useState(0);

  const handleClick = (id) => {
    options === 0 ? setOptions(id) : setOptions(0);
  };

  return (
    <div>
      <a onClick={() => handleClick(props.id)}>{props.name}</a>
      <br />
      {options === props.id ? <TaskOptions task={props} /> : ''}
    </div>
  );
};

const TaskOptions = ({ task }) => {
  const [editMenu, setEditMenu] = useState(false);
  const handleEdit = () => {
    setEditMenu(!editMenu);
  };

  const editItems = () => {
    return (
      <div id="edit-menu">
        <img alt="obi" src={obi}></img>
      </div>
    );
  };

  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      {editMenu ? editItems() : ''}
    </div>
  );
};

export default Task;
