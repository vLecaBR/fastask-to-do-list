import styled from 'styled-components';

export const TaskListContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s, color 0.3s;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s, color 0.3s;
`;
