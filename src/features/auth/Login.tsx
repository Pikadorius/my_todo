import React from 'react';
import {LoginRequestType} from './authTypes';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppDispatch} from '../../app/store';
import {loginTC} from './authSlice';

const Login = () => {
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

        </div>
    );
};

export default Login;