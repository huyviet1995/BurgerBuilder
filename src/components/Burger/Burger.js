import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const { ingredients } = props;
    let transformedIngredients = Object.keys(ingredients)
        .map(igKey => {
            return [...Array(ingredients[igKey])]
                .map((_, i) => (
                    <BurgerIngredient key={igKey+i} type={igKey}/>
                ))
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, [])
    if (transformedIngredients.length === 0) {
        transformedIngredients = <strong>Please start adding ingredients</strong>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;