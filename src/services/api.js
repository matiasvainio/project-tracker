import axios from 'axios';

const url = 'http://localhost:4000/api/tasks';

const getAll = async () => {
  const response = await axios.get(url);
  return response.data;
};

const post = async (task) => {
  const response = await axios.post(url, task);
  return response.data;
};

export { getAll, post };
