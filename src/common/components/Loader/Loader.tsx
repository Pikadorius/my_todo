import React from 'react';
import s from './Loader.module.css'
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    return (
        <div className={s.loader}>
            <CircularProgress variant={'indeterminate'} color={'inherit'}/>
        </div>
    );
};

export default Loader;