import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Peter Kim',
        address: {
          street: '123 main street',
          zipCode: '30135',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form action="">
        <Input inputtype="input" name="name" id="" placeholder="Your Name" />
        <Input inputtype="input" name="email" id="" placeholder="Your email" />
        <Input inputtype="input" name="street" id="" placeholder="Street" />
        <Input inputtype="input" name="post" id="" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;