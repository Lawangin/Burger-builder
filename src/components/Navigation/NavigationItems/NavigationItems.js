import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.module.css';
// import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <li>
            <NavLink to="/burgerbuilder">
                Burger Builder
            </NavLink>
        </li>
        <li>
            <NavLink to="/checkout">
                Checkout
            </NavLink>
        </li>
    </ul>
);

export default navigationItems;