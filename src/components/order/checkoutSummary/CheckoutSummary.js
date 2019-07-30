import React from 'react';

import Burger from './../../burger/Burger';
import Button from './../../UI/button/Button';

import styles from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>Tasty!</h1>
            <div style={{width:"100%", margin:"auto"}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button clicked={props.checkoutCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.checkoutContinued} btnType="Success">CONTINUE</Button>
        </div>
    );
}
 
export default CheckoutSummary;