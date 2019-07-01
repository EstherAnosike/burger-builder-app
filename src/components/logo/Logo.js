import React from 'react';

import styles from './Logo.module.css';
import logo from './../../assets/images/burger-logo.png';

const Logo = (props) => (
    <div className={styles.Logo} style={{height:props.height}}>
        <img src={logo} alt="MyBurger" />
    </div>
);

export default Logo;