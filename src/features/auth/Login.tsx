import React from 'react';
import {LoginRequestType} from './authTypes';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../app/store';
import {loginTC} from './authSlice';
import Loader from '../../common/components/Loader/Loader';
import SimpleSnackbar from '../../common/components/SnackBar/SnackBar';

const Login = () => {

    const isLoading = useAppSelector<string>(state => state.app.appStatus) === 'loading'
    const dispatch = useAppDispatch()
    const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginRequestType>();
    const onSubmit: SubmitHandler<LoginRequestType> = data => {
        console.log(data);
        dispatch(loginTC(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('email')}/>
                <input type={'password'} {...register('password')}/>
                <input type="submit" />
            </form>
            {isLoading && <Loader/>}
            <SimpleSnackbar/>
        </div>
    );
};

export default Login;