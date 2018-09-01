import React from 'react';
import css from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={css.BuildControl}>
            <div className={css.Label}>{props.label}</div>
            <button className={css.Less}>Less</button>
            <button className={css.More} onClick={props.added}>More</button>
        </div>
    );
};

export default buildControl;
