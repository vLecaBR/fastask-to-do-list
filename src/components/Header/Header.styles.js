import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#444' : '#ffffff')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#f7f7f7' : '#333')};
  padding: 10px 20px;
  box-shadow: ${({ isDarkMode }) =>
    isDarkMode ? '0 2px 5px rgba(255, 255, 255, 0.1)' : '0 2px 5px rgba(0, 0, 0, 0.1)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;
