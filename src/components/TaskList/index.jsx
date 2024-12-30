import React, { useState, useEffect } from 'react';
import { TaskListContainer, Title } from './TaskList.styles';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { fetchTasks, addTask, updateTask, deleteTask } from '../../api';

function TaskList({ section }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const theme = useTheme();

  useEffect(() => {
    const loadTasks = async () => {
      const { data } = await fetchTasks(section);
      setTasks(data);  // Atualiza as tarefas para a seção atual
    };
  
    loadTasks();
  }, [section]);  // Recarrega as tarefas sempre que a seção mudar
  

  const handleToggleTask = async (id) => {
    const task = tasks.find((t) => t.id === id);
  
    // Verifica se a tarefa já está marcada como concluída
    if (task.completed) return; // Se já está concluída, não faz nada
  
    const updatedTask = {
      ...task,
      completed: true,   // Marca a tarefa como concluída
      section: "Completas", // Muda a seção para "Completas"
    };
  
    // 1. Remove a tarefa localmente da seção atual
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  
    // 2. Adiciona a tarefa à seção "Completas" localmente
    setTasks((prevTasks) => [...prevTasks, updatedTask]);
  
    try {
      // 3. Atualiza a tarefa no backend, movendo para a seção "Completas"
      await updateTask(id, updatedTask);
    } catch (error) {
      console.error("Erro ao mover a tarefa para a seção 'Completas':", error);
    }
  };
  

  const handleAddTask = async () => {
    if (newTask.trim()) {
      const { data } = await addTask({ text: newTask, section, completed: false });
      setTasks([...tasks, data]); // Tarefa é adicionada à lista da seção atual
      setNewTask('');
    }
  };
  

  const handleDeleteTask = async (id) => {
    if (section === 'Lixeira') {
      // Excluir permanentemente a tarefa
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Remove imediatamente da lista
      await deleteTask(id);  // Deletar no backend
    } else {
      // Mover tarefa para a seção 'Lixeira'
      const task = tasks.find((t) => t.id === id);
      const updatedTask = { ...task, section: 'Lixeira' };  // Muda a seção da tarefa para 'Lixeira'
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Remove a tarefa localmente
      await updateTask(id, updatedTask);  // Atualiza no backend
    }
  };
  

  return (
    <TaskListContainer>
      <Title>{section}</Title>
      {section !== 'Lixeira' && (
        <>
          <TextField
            label={`Adicione uma tarefa em "${section}"`}
            multiline
            rows={1}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            variant="outlined"
            fullWidth
            sx={{
              marginBottom: '20px',
              backgroundColor: theme.palette.background.default,
              borderRadius: '5px',
            }}
          />
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Adicionar Tarefa
          </Button>
        </>
      )}
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              sx={{
                color: theme.palette.primary.main,
                '&.Mui-checked': { color: theme.palette.primary.main },
              }}
            />
            <ListItemText
              primary={task.text}
              sx={{
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? theme.palette.text.disabled : theme.palette.text.primary,
              }}
            />
            <Box sx={{ marginLeft: 'auto' }}>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteTask(task.id)}
              >
                {section === 'Lixeira' ? 'Excluir' : 'Mover para Lixeira'}
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </TaskListContainer>
  );
}

export default TaskList;
