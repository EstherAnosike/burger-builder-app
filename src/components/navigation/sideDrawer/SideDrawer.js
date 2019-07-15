import React from 'react';

import Logo from './../../logo/Logo';
import Aux from '../../../hoc/aux/Aux';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/backdrop/Backdrop';
import NavigationItems from './../navigationItems/NavigationItems';

const SideDrawer = (props) => {
    let attachedStyles = [styles.SideDrawer, styles.Close]; 
    if (props.open) {
        attachedStyles = [styles.SideDrawer, styles.Open];
    }

    return ( 
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedStyles.join(' ')}>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div> 
        </Aux>
    );
}
 
export default SideDrawer;