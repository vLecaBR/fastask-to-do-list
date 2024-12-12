// TaskList/index.jsx
import React, { useState } from 'react';
import { TaskListContainer, Title } from './TaskList.styles';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

function TaskList({ section }) {
  const [tasks, setTasks] = useState([]); // Tarefas de todas as seções
  const [newTask, setNewTask] = useState('');

  const filteredTasks = tasks.filter(task => task.section === section);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask, completed: false, section },
      ]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, section: 'Lixeira' } : task
    )));
  };

  return (
    <TaskListContainer>
      <Title>{section}</Title>
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
          backgroundColor: '#ffffff',
          borderRadius: '5px',
        }}
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Adicionar Tarefa
      </Button>
      <List>
        {filteredTasks.map(task => (
          <ListItem
            key={task.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              marginBottom: '10px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
              paddingRight: '10px',
            }}
          >
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              sx={{
                color: '#007bff',
                '&.Mui-checked': {
                  color: '#007bff',
                },
              }}
            />
            <ListItemText
              primary={task.text}
              sx={{
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#aaa' : '#333',
              }}
            />
            <Box sx={{ marginLeft: 'auto' }}>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </TaskListContainer>
  );
}

export default TaskList;