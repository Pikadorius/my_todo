import React from 'react';
import s from './Login.module.css'
import {LoginRequestType} from '../authTypes';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../../app/store';
import {loginTC} from '../authSlice';
import Loader from '../../../common/components/Loader/Loader';
import SimpleSnackbar from '../../../common/components/SnackBar/SnackBar';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Navigate} from 'react-router-dom';
import ButtonAppBar from '../../../common/components/AppBar/AppBar';

const Login = () => {

    const isLoggedIn = useAppSelector(state=>state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    }).required();

    const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginRequestType>({
        resolver: yupResolver(schema),
        mode: 'onTouched'
    });
    const onSubmit: SubmitHandler<LoginRequestType> = data => {
        console.log(data);
        dispatch(loginTC(data))
    }

    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return (
        <div className={s.container}>
            <ButtonAppBar title={'Login'}/>
            <div className={s.wrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('email')}/>
                    <p>{errors.email?.message}</p>
                    <input type={'password'} {...register('password')}/>
                    <p>{errors.password?.message}</p>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default Login;