import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import { Container } from './App.styles';
import Header from './components/Header';
import { useTheme } from './context/ThemeContext';
import { fetchSections, addSection, removeSection } from './api';

function App() {
  const [currentSection, setCurrentSection] = useState('Hoje');
  const [sections, setSections] = useState([]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const loadSections = async () => {
      const { data } = await fetchSections();
      setSections(data);
    };

    loadSections();
  }, []);

  const handleAddSection = async (newSection) => {
    if (newSection && !sections.includes(newSection)) {
      const { data } = await addSection(newSection);
      setSections([...sections, data.name]);
    }
  };

  const handleRemoveSection = async (sectionToRemove) => {
    if (!['Hoje', 'Próximos 7 dias', 'Completas', 'Lixeira'].includes(sectionToRemove)) {
      const sectionId = sections.find((sec) => sec.name === sectionToRemove)?.id;
      await removeSection(sectionId);
      setSections(sections.filter((section) => section.name !== sectionToRemove));
      if (currentSection === sectionToRemove) {
        setCurrentSection('Hoje');
      }
    }
  };

  return (
    <div>
      <Header />
      <Container isDarkMode={isDarkMode}>
        <Sidebar
          sections={sections}
          setCurrentSection={setCurrentSection}
          addSection={handleAddSection}
          removeSection={handleRemoveSection}
        />
        <TaskList section={currentSection} />
      </Container>
    </div>
  );
}

export default App;
