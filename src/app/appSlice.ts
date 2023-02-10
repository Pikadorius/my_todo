import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI} from '../features/auth/authAPI';
import {setLoggedIn} from '../features/auth/authSlice';

export type StatusType = 'idle' | 'loading' | 'success' | 'failed'

type AppInitialStateType = {
    appStatus: StatusType
    appError: string | null
    isInitialized: boolean
}

const initialState: AppInitialStateType = {
    appStatus: 'idle',
    appError: null,
    isInitialized: false
}

export const initializeAppTC = createAsyncThunk('authMe', async (_, {dispatch})=>{
    dispatch(setInitialized(false))

    try {
        const res = await  authAPI.me()
        if (res.data.resultCode===0) {
            dispatch(setLoggedIn(true))
        }
        else {
            dispatch(setLoggedIn(false))
        }
    }
    catch (e) {

    }
    finally {
        dispatch(setInitialized(true))
    }
})

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setInitialized: (state, action: PayloadAction<boolean>) => {
            state.isInitialized = action.payload
        },
        setAppError: (state, action: PayloadAction<string | null>) => {
            state.appError = action.payload
        },
        setAppStatus: (state, action: PayloadAction<StatusType>) => {
            state.appStatus = action.payload
        },
    }
})

export const {setInitialized, setAppStatus, setAppError} = appSlice.actions

const appReducer = appSlice.reducer
export default appReducer