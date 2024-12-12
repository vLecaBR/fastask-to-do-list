// App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import { Container, HeaderContainer } from './App.styles';
import Header from './components/Header';

function App() {
  return (
    <div>
      <HeaderContainer>
      <Header />
      </HeaderContainer>
    <Container>
      <Sidebar />
      <TaskList />
    </Container>
    </div>
  );
}

export default App;