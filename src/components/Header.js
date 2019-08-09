import React from 'react';
import Logo from '../assets/logo.png';
const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo}  alt = "Rohan Mahajan's site logo" />
            </div>
            <a className="header__contact" href="tel:+91-7760879988" title="Contact Me"> 
                <span className="say">Hi</span>
            </a>
        </header>
    );
}

export default Header;