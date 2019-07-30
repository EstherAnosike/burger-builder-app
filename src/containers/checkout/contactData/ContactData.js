import React, { Component } from 'react';

import axios from './../../../AxiosOrders';
import Spinner from './../../../components/UI/spinner/Spinner'; 
import Button from './../../../components/UI/button/Button';

import styles from './ContactData.module.css';

class ContactData extends Component {
    state = { 
        name: '',
        email: '',
        address: {
            street: '',
            postralCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading:true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Esther',
                address: {
                    street: 'Banana street',
                    country: 'Ghana',
                    zipCode: '4321',
                },
                email: 'esther@gmail.com',
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading:false, })  
                this.props.history.push('/'); 
            })
            .catch(error => {
                this.setState({ loading:false, })   
            });
    }

    render() { 
        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your Name" />
                <input className={styles.Input} type="email" name="email" placeholder="Your Email" />
                <input className={styles.Input} type="text" name="street" placeholder="Street" />
                <input className={styles.Input} type="text" name="Postal" placeholder="Postalcode" />
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>
        );
        if(this.state.loading) {
            form = <Spinner />;
        } 
        return ( 
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}
 
export default ContactData;