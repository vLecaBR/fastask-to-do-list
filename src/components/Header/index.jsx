import React from "react";
import logo from '../../assets/logo.png';
import { Logo } from './Header.styles';

function Header() {
    return (
        <header>
        <Logo src={logo} alt="Fastask Logo" />
        </header>
    );
}

export default Header;