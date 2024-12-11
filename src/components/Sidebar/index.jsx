// components/Sidebar/index.jsx
import React from 'react';
import { SidebarContainer, Logo, List, ListItem } from './Sidebar.styles';
import logo from '../../assets/logo.png';

function Sidebar() {
  return (
    <SidebarContainer>
      <Logo src={logo} alt="Fastask Logo" />
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