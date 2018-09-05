import React from 'react';
import css from './Spinner.css';

const spinner = () => {
    return (
        <div className={css.Loader}>
            Loading...
        </div>
    );
};

export default spinner;
