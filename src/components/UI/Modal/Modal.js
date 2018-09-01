import React from 'react';
import css from './Modal.css';

const modal = (props) => {
    return (
        <div className={css.Modal}>
            {props.children}
        </div>
    );
};

export default modal;
