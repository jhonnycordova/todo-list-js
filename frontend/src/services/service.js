import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL ?? 'API_ERROR';
const api = axios.create({
  baseURL: API_URL,
  timeout: 500000,
});

export const getTodos = () => {
  return axios.get(`${API_URL}/todo`);
};

export const createToDo = (todo) => {
  if (!todo || !todo.text) {
    return new Promise((_, reject) => reject(new Error('The todo is mandatory')));
  }

  return axios.post(`${API_URL}/todo`, todo);
};

export const updateToDo = (todo) => {
  if (!todo || !todo.id || !todo.text) {
    return new Promise((_, reject) => reject(new Error('The todo is mandatory')));
  }

  return axios.put(`${API_URL}/todo/${todo.id}`, todo);
};

export const deleteToDo = (idToDo) => {
  if (!idToDo) {
    return new Promise((_, reject) => reject(new Error('The id todo is mandatory')));
  }
  return axios.delete(`${API_URL}/todo/${idToDo}`);
};

export default api;
