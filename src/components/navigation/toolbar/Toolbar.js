import React from 'react';

import Logo from './../../logo/Logo';
import styles from './Toolbar.module.css';
import NavigationItems from './../navigationItems/NavigationItems';

const Toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <div className={styles.Logo}>
            <Logo/>
        </div> 
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);
 
export default Toolbar;