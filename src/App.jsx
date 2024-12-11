// App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import { Container } from './App.styles';

function App() {
  return (
    <Container>
      <Sidebar />
      <TaskList />
    </Container>
  );
}

export default App;