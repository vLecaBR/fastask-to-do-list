// components/Sidebar/Sidebar.styles.js
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.sidebarBackground};
  color: ${({ theme }) => theme.sidebarText};
  padding: 20px;
  box-shadow: ${({ theme }) =>
    theme.sidebarBackground === '#444' ? '2px 0 5px rgba(255, 255, 255, 0.1)' : '2px 0 5px rgba(0, 0, 0, 0.1)'};
  transition: background-color 0.3s, color 0.3s;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.sidebarBackground};
  color: ${({ theme }) => theme.sidebarText};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(0, 123, 255, 0.1);
    color: #007bff;
  }
`;