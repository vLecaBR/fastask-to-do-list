import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { HeaderContainer, Logo, RightSection } from './Header.styles';
import { Avatar, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
        // Aqui você pode adicionar lógica para alternar o tema global
    };

    return (
        <HeaderContainer>
            <Logo src={logo} alt="Fastask Logo" />
            <RightSection>
                <IconButton onClick={toggleTheme} sx={{ marginRight: '10px' }}>
                    {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <Avatar alt="Usuário" src="https://github.com/vLecaBR.png" />
            </RightSection>
        </HeaderContainer>
    );
}

export default Header;
