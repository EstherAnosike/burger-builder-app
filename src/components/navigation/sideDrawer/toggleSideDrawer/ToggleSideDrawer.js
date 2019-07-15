import React from 'react';

import styles from './../toggleSideDrawer/ToggleSideDrawer.module.css';

const ToggleSideDrawer = (props) => {
    return ( 
        <div className={styles.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
     );
}
 
export default ToggleSideDrawer;