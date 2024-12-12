import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative; /* opcional, para garantir posicionamento no fluxo */
`;

export const Logo = styled.img`
    width: 150px;
    margin: 0; /* Remove o margin-bottom */
    margin-left: 40px; /* Adiciona margin-left */
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: #ffffff;
    cursor: pointer;
`;
