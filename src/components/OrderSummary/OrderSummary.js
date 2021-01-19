import React from "react";
import Aux from "../../hoc/Auxx/Auxx";
import Button from '../UI/Button/Button';

class OrderSummary extends React.Component {

  // componentWillUpdate () {
  //   console.log('[OrderSummary] will update');
  // }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    const { purchaseCancelled, purchaseContinued } = this.props;
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
          <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }

}

export default OrderSummary;
