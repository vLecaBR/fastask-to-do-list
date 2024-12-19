import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%; /* O header ocupa toda a largura da tela */
  background-color: #ffffff;
  padding: 10px 20px; //! Ajusta o espaçamento interno do header
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between; //! Espaça os elementos: logo à esquerda, avatar à direita
  align-items: center; //! Alinha verticalmente os itens no centro do header
  margin-top: 15px;
`;

export const Logo = styled.img`
  width: 150px; /* Ajusta o tamanho da logo */
  margin-left: 29px; /* Ajusta o espaçamento à esquerda */
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente os itens */
  justify-content: center; /* Não há necessidade de espaçamento extra */
  margin-right: 50px; /* Ajusta o espaçamento à direita */
`;
