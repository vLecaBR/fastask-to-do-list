import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { HeaderContainer, Logo, RightSection } from './Header.styles';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/logo.png';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <HeaderContainer isDarkMode={isDarkMode}>
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
