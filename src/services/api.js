import axios from 'axios';

const url = 'http://localhost:4000/api/tasks';

const getAll = async () => {
  const response = await axios.get(url);
  return response.data;
};

const create = async (task) => {
  const response = await axios.post(url, task);
  return response.data;
};

const modify = async (task) => {
  const response = await axios.put(`${url}/${task.id}`, task);
  return response.data;
};

export { getAll, create, modify };
