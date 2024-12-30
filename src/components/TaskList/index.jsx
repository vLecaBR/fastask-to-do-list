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
      setTasks(data);
    };

    loadTasks();
  }, [section]);

  const handleToggleTask = async (id) => {
    const task = tasks.find((t) => t.id === id);
    const updatedTask = { ...task, completed: !task.completed };
    await updateTask(id, updatedTask);
    setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
  };

  const handleAddTask = async () => {
    if (newTask.trim()) {
      const { data } = await addTask({ text: newTask, section, completed: false });
      setTasks([...tasks, data]);
      setNewTask('');
    }
  };

  const handleDeleteTask = async (id) => {
    if (section === 'Lixeira') {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id)); // Tarefa excluída
    } else {
      const task = tasks.find((t) => t.id === id);
      const updatedTask = { ...task, section: 'Lixeira' };
      await updateTask(id, updatedTask); // Mover para Lixeira
      setTasks(tasks.map((t) => (t.id === id ? updatedTask : t))); // Atualiza a lista
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
