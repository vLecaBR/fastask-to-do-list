// components/TaskList/index.jsx
import React from 'react';
import { TaskListContainer, Title, Input, TaskItem } from './TaskList.styles';

function TaskList() {
  return (
    <TaskListContainer>
      <Title>Hoje</Title>
      <Input placeholder="Crie uma nova tarefa" />
      <TaskItem>Terminar curso React</TaskItem>
      <TaskItem>Terminar trabalho Fábrica de software</TaskItem>
      <TaskItem>Praticar Figma</TaskItem>
      <TaskItem>Praticar React</TaskItem>
    </TaskListContainer>
  );
}

export default TaskList;