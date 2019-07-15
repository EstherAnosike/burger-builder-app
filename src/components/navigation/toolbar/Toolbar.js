import React from 'react';

import Logo from './../../logo/Logo';
import styles from './Toolbar.module.css';
import NavigationItems from './../navigationItems/NavigationItems';
import ToggleSideDrawer from '../sideDrawer/toggleSideDrawer/ToggleSideDrawer';

const Toolbar = (props) => (
    <header className={styles.Toolbar}>
        <ToggleSideDrawer clicked={props.ToggleSideDrawerClicked}  />
        <div className={styles.Logo}>
            <Logo/>
        </div> 
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);
 
export default Toolbar;