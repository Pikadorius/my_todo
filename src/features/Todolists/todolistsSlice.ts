import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoDomainType, TodoResponseType} from './todolistsTypes';
import {setAppStatus} from '../../app/appSlice';
import {todolistsAPI} from './todolistsAPI';

const initialState: TodoDomainType[] = []


export const getTodoTC = createAsyncThunk('getTodo', async(_, {dispatch})=>{
    dispatch(setAppStatus('loading'))
    try {
        const res =await todolistsAPI.fetchTodolists()
        dispatch(getTodolists(res.data))
        dispatch(setAppStatus('success'))
    }
    catch (e) {

    }
})



const todolistsSlice = createSlice({
    name: 'todolists',
    initialState,
    reducers: {
        getTodolists: (state, action:PayloadAction<TodoResponseType[]>)=>{
            return action.payload.map(t=>({...t, todoStatus: 'idle'}))
        }
    }
})
export const {getTodolists}=todolistsSlice.actions

const todolistsReducer = todolistsSlice.reducer
export default todolistsReducer