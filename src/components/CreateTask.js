import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { post } from '../services/api';

const CreateTask = () => {
  const [taskName, setTaskName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  /**
   * Function is used to create new task object that gets sent to the database.
   * @param {*} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      name: taskName,
      startDate: startDate,
    };
    post(newTask);
    document.getElementById('task-form').reset();
  };

  /**
   * Function is used to set taskname state.
   * @param {*} event
   */
  const handleTaskName = (event) => {
    event.preventDefault();
    setTaskName(event.target.value);
  };

  return (
    <div>
      <h2>Start date</h2>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <h2>Task name</h2>
      <form id="task-form">
        <input onChange={handleTaskName}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreateTask;
