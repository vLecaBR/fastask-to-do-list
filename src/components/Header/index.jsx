import React from 'react';
import logo from '../../assets/logo.png';
import { HeaderContainer, Logo, RightSection } from './Header.styles';
import { Avatar } from '@mui/material';

function Header() {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="Fastask Logo" />
            <RightSection>
                <Avatar alt="Usuário" src="https://github.com/vLecaBR.png" />
            </RightSection>
        </HeaderContainer>
    );
}

export default Header;
