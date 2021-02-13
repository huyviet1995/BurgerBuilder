import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.scss'
import axios from '../../../axios-orders'
import Spinner from '../../../components/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email:'',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,
  }

  orderHandler = event => {
    event.preventDefault();
    this.setState({
     loading: true,
    });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Viet Dang",
        address: {
          street: "Teststreet 1",
          zipCode: "12345",
          country: "Vietnam",
        },
        email: "vdang@gustavus.edu",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false, purchasing: false });
        this.props.history.push('/')
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false, purchasing: false });
      });
  }

  render () {
    let form = null
    if (this.state.loading) {
      form = <Spinner/>
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
        <form>
          <input type='text' name='name' placeholder='Your name'/>
          <input type='email' name='email' placeholder='Your email'/>
          <input type='text' name='street' placeholder='Street'/>
          <input type='text' name='street' placeholder='Street'/>
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;