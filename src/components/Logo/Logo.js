import React from 'react';
import burgerLogo from '../../assets/img/burger_logo.png';
import css from './Logo.css';

const logo = (props) => {
    return (
        <div className={css.Logo}>
            <img src={burgerLogo} alt="burger logo" />
        </div>
    );
};

export default logo;
