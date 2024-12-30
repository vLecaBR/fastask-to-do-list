import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001', // Substitua pela URL real do seu backend
  });

export const fetchSections = () => api.get('/sections');
export const addSection = (name) => api.post('/sections', { name });
export const removeSection = (id) => api.delete(`/sections/${id}`);

export const fetchTasks = (section) => api.get(`/tasks?section=${section}`);
export const addTask = (task) => api.post('/tasks', task);
export const updateTask = (id, updates) => api.put(`/tasks/${id}`, updates);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);