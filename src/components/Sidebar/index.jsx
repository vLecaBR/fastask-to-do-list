// components/Sidebar/index.jsx
import React from 'react';
import { SidebarContainer, List, ListItem } from './Sidebar.styles';

function Sidebar() {
  return (
    <SidebarContainer>
      <List>
        <ListItem>Hoje</ListItem>
        <ListItem>Próximos 7 dias</ListItem>
        <ListItem>Programação</ListItem>
        <ListItem>Trabalho</ListItem>
        <ListItem>Faculdade</ListItem>
        <ListItem>Completas</ListItem>
        <ListItem>Lixeira</ListItem>
      </List>
    </SidebarContainer>
  );
}

export default Sidebar;