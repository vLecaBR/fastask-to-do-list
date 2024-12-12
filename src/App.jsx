// App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import { Container, HeaderContainer } from './App.styles';
import Header from './components/Header';

function App() {
  const [currentSection, setCurrentSection] = useState('Hoje'); // Estado para controlar a seção atual

  return (
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <Sidebar setCurrentSection={setCurrentSection} />
        <TaskList section={currentSection} />
      </Container>
    </div>
  );
}

export default App;