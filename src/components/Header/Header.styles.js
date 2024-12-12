import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%; /* O header ocupa toda a largura da tela */
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between; /* Espaça os elementos: logo à esquerda, right section à direita */
  align-items: center; /* Alinha verticalmente os itens no centro do header */
  position: relative;
`;

export const Logo = styled.img`
  width: 150px; /* Ajusta o tamanho da logo */
  margin-left: 20px; /* Pequeno espaçamento da borda esquerda */
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente os itens */
  justify-content: flex-end; /* Garante que itens internos fiquem à direita */
  margin-left: 95vw; /* Pequeno espaçamento da borda direita */
`;
