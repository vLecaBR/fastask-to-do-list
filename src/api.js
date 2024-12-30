import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Substitua pela URL do seu backend, se diferente

// Tarefas
export const getTasksBySection = (sectionId) => axios.get(`${API_BASE_URL}/tasks/${sectionId}`);
export const addTask = (task) => axios.post(`${API_BASE_URL}/tasks`, task);
export const updateTask = (id, updates) => axios.put(`${API_BASE_URL}/tasks/${id}`, updates);
export const deleteTask = (id) => axios.delete(`${API_BASE_URL}/tasks/${id}`);

// Seções
export const getSections = () => axios.get(`${API_BASE_URL}/sections`);
export const addSection = (section) => axios.post(`${API_BASE_URL}/sections`, section);
export const deleteSection = (id) => axios.delete(`${API_BASE_URL}/sections/${id}`);
