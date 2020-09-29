import React, { Component } from 'react';
import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                email: 2
            }
        }
    }

    render() {
        return (
            <Aux>
                <Burger/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;