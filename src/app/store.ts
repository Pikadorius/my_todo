import {combineReducers, configureStore} from '@reduxjs/toolkit';
import appReducer from './appSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import authReducer from '../features/auth/authSlice';

const reducer = combineReducers({
    app: appReducer,
    auth: authReducer
})

export const store= configureStore({
    reducer: reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

