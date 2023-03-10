import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoDomainType, TodoResponseType} from './todolistsTypes';
import {setAppStatus} from '../../app/appSlice';
import {todolistsAPI} from './todolistsAPI';

const initialState: TodoDomainType[] = []


export const getTodoTC = createAsyncThunk('getTodo', async (_, {dispatch}) => {
    dispatch(setAppStatus('loading'))
    try {
        const res = await todolistsAPI.fetchTodolists()
        dispatch(getTodolists(res.data))
        dispatch(setAppStatus('success'))
    } catch (e) {

    }
})


export const addTodoTC = createAsyncThunk('addTodo', async (title: string, {dispatch}) => {
    dispatch(setAppStatus('loading'))
    try {
        const res = await todolistsAPI.createTodolist(title)
        if (res.data.resultCode === 0) {
            dispatch(addTodolist(res.data.data))
            dispatch(setAppStatus('success'))
            dispatch(getTodoTC())
        }
    } catch (e) {

    }
})

export const deleteTodoTC = createAsyncThunk('deleteTodo', async (todolistId: string, {dispatch}) => {
    dispatch(setAppStatus('loading'))
    try {
        const res = await todolistsAPI.deleteTodolist(todolistId)
        if (res.data.resultCode === 0) {
            dispatch(deleteTodolist(todolistId))
            dispatch(setAppStatus('success'))
        }
    } catch (e) {

    }
})


const todolistsSlice = createSlice({
    name: 'todolists',
    initialState,
    reducers: {
        getTodolists: (state, action: PayloadAction<TodoResponseType[]>) => {
            return action.payload.map(t => ({...t, todoStatus: 'idle'}))
        },
        addTodolist: (state, action: PayloadAction<TodoResponseType>) => {
            state.push({...action.payload, todoStatus: 'idle'})
        },
        deleteTodolist: (state, action: PayloadAction<string>) => {
            const index = state.findIndex(t => t.id === action.payload)
            state.splice(index, 1)
        },
    }
})
export const {getTodolists, addTodolist, deleteTodolist} = todolistsSlice.actions

const todolistsReducer = todolistsSlice.reducer
export default todolistsReducer