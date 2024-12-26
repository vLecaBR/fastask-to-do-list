// App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import { Container } from './App.styles';
import Header from './components/Header';
import { useTheme } from './context/ThemeContext';

function App() {
  const [currentSection, setCurrentSection] = useState('Hoje'); //! Estado para controlar a seção atual
  const [sections, setSections] = useState([
    'Hoje', 'Próximos 7 dias',  'Completas', 'Lixeira',
  ]);

  const {isDarkMode} = useTheme();

  const addSection = (newSection) => {
    if (newSection && !sections.includes(newSection)) {
      setSections([...sections, newSection]);
    }
  };

  const removeSection = (sectionToRemove) => {
    setSections(sections.filter(section => section !== sectionToRemove));
    if (currentSection === sectionToRemove) {
      setCurrentSection('Hoje'); //! Reverter para "Hoje" se a seção atual for removida
    }
  };

  
  return (
    <div>
      <Header />
      <Container isDarkMode={isDarkMode}>
        <Sidebar
          sections={sections}
          setCurrentSection={setCurrentSection}
          addSection={addSection}
          removeSection={removeSection}
        />
        <TaskList section={currentSection} />
      </Container>
    </div>
  );
}

export default App;