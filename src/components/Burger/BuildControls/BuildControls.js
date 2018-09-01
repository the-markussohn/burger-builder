import React from 'react';
import css from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (
        <div className={css.BuildControls}>
            {controls.map(control => (
                <BuildControl key={control.label} label={control.label}/>
            ))}
        </div>
    );
};

export default buildControls;
