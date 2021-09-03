import React, { useState, useEffect } from 'react';
import { getAll } from '../services/api';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await getAll();
    setTasks(response);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const tasksAsList = tasks.map((task) => {
    return (
      <li key={task.id}>
        <Task props={task} />
      </li>
    );
  });

  return (
    <div>
      <h1>Hello from the list of tasks!</h1>
      <ul>{tasksAsList}</ul>
    </div>
  );
};

export default TaskList;
