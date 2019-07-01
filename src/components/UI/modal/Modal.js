import React from 'react';

import Aux from './../../../hoc/Aux'; 
import styles from './Modal.module.css';
import Backdrop from './../backdrop/Backdrop';

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div 
            className={styles.Modal} 
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;