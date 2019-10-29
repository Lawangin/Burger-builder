import React from 'react';

import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    // Object.keys returns an array of the key for the values in object and map loops through that array
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            // console.log(igKey);
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add some ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;