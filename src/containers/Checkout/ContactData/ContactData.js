import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form action="">
          <input
            className={classes.Input}
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            id=""
            placeholder="Your email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            id=""
            placeholder="Street"
          />
          <input
            className={classes.Input}
            type="text"
            name="post"
            id=""
            placeholder="Postal Code"
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
