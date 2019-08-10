import React from 'react';
import Logo from '../assets/logo.png';
const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo}  alt = "Site's logo" />
            </div>
           
        </header>
    );
}

export default Header;