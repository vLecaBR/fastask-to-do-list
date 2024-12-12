// components/Sidebar/index.jsx
import React from 'react';
import { SidebarContainer, List, ListItem } from './Sidebar.styles';

function Sidebar({ setCurrentSection }) {
  const sections = ['Hoje', 'Próximos 7 dias', 'Completas', 'Lixeira'];

  return (
    <SidebarContainer>
      <List>
        {sections.map(section => (
          <ListItem
            key={section}
            onClick={() => setCurrentSection(section)}
            sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f0f0f0' } }}
          >
            {section}
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
}

export default Sidebar;