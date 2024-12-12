import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between; /* Divide o espaço entre a logo e a seção direita */
    align-items: center;
`;

export const Logo = styled.img`
    width: 150px;
    margin: 0; /* Remove margens desnecessárias */
    margin-left: 40px; /* Pequeno espaçamento à esquerda */
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center; /* Alinha os itens no centro verticalmente */
    justify-content: flex-end; /* Mantém os itens alinhados à direita */
    gap: 20px; /* Adiciona espaçamento uniforme entre os itens */
    margin-right: 40px; /* Pequeno espaçamento à direita do header */
`;
