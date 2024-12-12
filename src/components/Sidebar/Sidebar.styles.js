// components/Sidebar/Sidebar.styles.js
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: #FFF;

  &:hover {
  background-color: rgba(0, 123, 255, 0.1);
  color: #007bff;
}
`;