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
import { useTheme } from '@mui/material/styles'; // Para acessar o tema MUI

function TaskList({ section }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const theme = useTheme(); // Obtém o tema atual do MUI

  const filteredTasks = tasks.filter((task) => task.section === section);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
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
    if (section === 'Lixeira') {
      setTasks(tasks.filter((task) => task.id !== id));
    } else {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, section: 'Lixeira' } : task
        )
      );
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
          <Button variant="contained" color="primary" onClick={addTask}>
            Adicionar Tarefa
          </Button>
        </>
      )}
      <List>
        {filteredTasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: theme.palette.background.paper,
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
                color: theme.palette.primary.main,
                '&.Mui-checked': {
                  color: theme.palette.primary.main,
                },
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
                onClick={() => deleteTask(task.id)}
                sx={{
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  '&:hover': {
                    borderColor: theme.palette.primary.dark,
                  },
                }}
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
