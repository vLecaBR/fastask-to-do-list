// App.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#f7f7f7')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#f7f7f7' : '#333')};
  transition: background-color 0.3s, color 0.3s;
`;
