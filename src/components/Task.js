import React, { useState, useEffect } from 'react';
import './task.css';
import DatePicker from 'react-datepicker';
import { modify } from '../services/api';
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
  const [startDate, setStartDate] = useState(new Date(task.startDate));
  const [endDate, setEndDate] = useState(new Date(task.endDate));
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleEdit = () => {
    setEditMenu(!editMenu);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      ...task,
      endDate: endDate,
      startDate: startDate,
    };
    modify(newTask);
  };

  const calculateElapsedTime = (startDate, endDate) => {
    return (new Date(endDate) - new Date(startDate)) / 3600000;
  };

  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleString('fi-FI');
  };

  const changeState = (sel, date) => {
    sel === 1 ? setStartDate(date) : setEndDate(date);
    setElapsedTime(calculateElapsedTime(startDate, endDate));
  };

  useEffect(() => {
    setElapsedTime(calculateElapsedTime(startDate, endDate));
  }, [startDate, endDate]);

  const editItems = () => {
    return (
      <div id="edit-menu">
        <p>Start date</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => changeState(1, date)}
          showTimeSelect
        />
        <p>End date</p>
        <DatePicker
          selected={endDate}
          onChange={(date) => changeState(2, date)}
          showTimeSelect
        />
        <button onClick={handleSubmit}>Submit</button>
        <br />
        <p>Start date:</p>
        {formatDate(new Date(startDate))}
        <p>End date:</p>
        {formatDate(new Date(endDate))}
        <p>Elapsed time</p>
        {elapsedTime}
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
