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

  return (
    <div>
      <h1>Hello from the list of tasks!</h1>
      <ul>
        <Task tasks={tasks} />
      </ul>
    </div>
  );
};

export default TaskList;
