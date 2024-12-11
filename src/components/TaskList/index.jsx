// components/TaskList/index.jsx
import React, { useState } from 'react';
import { TaskListContainer, Title, Input, TaskItem, Checkbox } from './TaskList.styles';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Terminar curso React', completed: false },
    { id: 2, text: 'Terminar trabalho Fábrica de software', completed: false },
    { id: 3, text: 'Praticar Figma', completed: false },
    { id: 4, text: 'Praticar React', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  };

  return (
    <TaskListContainer>
      <Title>Hoje</Title>
      <Input placeholder="Crie uma nova tarefa" />
      {tasks.map(task => (
        <TaskItem key={task.id} completed={task.completed}>
          <Checkbox
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {task.text}
        </TaskItem>
      ))}
    </TaskListContainer>
  );
}

export default TaskList;