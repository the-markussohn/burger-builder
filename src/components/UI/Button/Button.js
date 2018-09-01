import React from 'react';
import css from './Button.css';

const button = (props) => {
    return (
        <button
            className={[css.Button, css[props.buttonType]].join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    );
};

export default button;
