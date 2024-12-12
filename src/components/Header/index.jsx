import React from "react";
import logo from '../../assets/logo.png';
import { Logo, RightSection } from './Header.styles';
import { Avatar } from '@mui/material';

function Header() {
    return (
        <header>
        <Logo src={logo} alt="Fastask Logo" />
        <RightSection>
            <Avatar alt="Usuário" src="https://github.com/vLecaBR.png" />
        </RightSection>
        </header>
    );
}

export default Header;