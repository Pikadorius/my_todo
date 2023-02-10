import React, {useEffect} from 'react';
import ButtonAppBar from '../../../common/components/AppBar/AppBar';
import {Navigate, Route, Routes} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../store';
import Todolists from '../../../features/Todolists/Todolist';
import {getTodoTC} from '../../../features/Todolists/todolistsSlice';
import {TodoDomainType} from '../../../features/Todolists/todolistsTypes';
import SideBar from '../../../common/components/Sidebar/SideBar';
import Todolist from '../../../features/Todolists/Todolist';


const TodolistsList = () => {

    const todolists = useAppSelector<TodoDomainType[]>(state => state.todolists)
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            return;
        }
        dispatch(getTodoTC())
    }, [])

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            <ButtonAppBar title={'Todolists'}/>
            <SideBar todos={todolists}/>
            <Routes>
                {todolists.map(t => {
                    return <Route key={t.id} path={t.title} element={<Todolist todolist={t}/>}/>
                })}
            </Routes>
        </div>
    );
};

export default TodolistsList;