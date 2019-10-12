import React from 'react';

import classes from './Logo.module.css';

import appLogo from '../../assets/images/LawanginKhanLOGO-01.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={appLogo} alt="MyBurger" />
    </div>
);

export default logo;