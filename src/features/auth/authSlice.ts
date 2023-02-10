import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppError, setAppStatus} from '../../app/appSlice';
import {authAPI} from './authAPI';
import {LoginRequestType} from './authTypes';

type AuthInitialStateType = {
    isLoggedIn: boolean
}

const initialState: AuthInitialStateType = {
    isLoggedIn: false
}

export const loginTC = createAsyncThunk('login', async (data:LoginRequestType, {dispatch}) => {
    dispatch(setAppStatus('loading'))
    try {
        const res = await authAPI.login(data)
        if (res.data.resultCode===0) {
            dispatch(setAppStatus('success'))
            dispatch(setLoggedIn(true))
        }
        else {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(res.data.messages[0]))
        }
    }
    catch (e) {

    }
})

export const logoutTC = createAsyncThunk('logout', async (_, {dispatch}) => {
    dispatch(setAppStatus('loading'))
    try {
        const res = await authAPI.logout()
        if (res.data.resultCode===0) {
            dispatch(setAppStatus('success'))
            dispatch(setLoggedIn(false))
        }
    }
    catch (e) {

    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        }
    }
})

export const {setLoggedIn} = authSlice.actions

const authReducer = authSlice.reducer
export default authReducer