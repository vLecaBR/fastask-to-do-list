// components/TaskList/index.jsx
import React, { useState } from 'react';
import { TaskListContainer, Title } from './TaskList.styles';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Terminar curso React', completed: false },
    { id: 2, text: 'Terminar trabalho Fábrica de software', completed: false },
    { id: 3, text: 'Praticar Figma', completed: false },
    { id: 4, text: 'Praticar React', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  return (
    <TaskListContainer>
      <Title>Hoje</Title>
      <TextField
        label="Crie uma nova tarefa"
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
      <Button variant="outlined"onClick={addTask}>Adicionar Tarefa</Button>
      <List>
        {tasks.map(task => (
          <ListItem
            key={task.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              marginBottom: '10px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
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
          </ListItem>
        ))}
      </List>
    </TaskListContainer>
  );
}

export default TaskList;
