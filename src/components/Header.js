import React from 'react';
import { SideNav, SideNavItem, Button, Icon } from 'react-materialize';
import Logo from '../assets/logo.png';
const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="Site's logo" />
            </div>
            <div>
                <SideNav trigger={
                    <Button node="a" waves="light" small>
                        <Icon>account_balance</Icon>
                    </Button>}
                    options={{ 
                        closeOnClick: true,
                        edge: 'right',
                        draggable : true
                    }}
                >

                    <SideNavItem href="#!icon" icon="cloud">
                        First Link With Icon
                    </SideNavItem>
                    <SideNavItem href="#!second">
                        Second Link
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                        Subheader
                    </SideNavItem>
                    <SideNavItem waves href="#!third">
                        Third Link With Waves
                    </SideNavItem>
                </SideNav>
            </div>
        </header>
    );
}

export default Header;