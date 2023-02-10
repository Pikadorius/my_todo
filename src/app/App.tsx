import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from './store';
import {initializeAppTC} from './appSlice';
import Login from '../features/auth/Login/Login';
import Loader from '../common/components/Loader/Loader';
import SimpleSnackbar from '../common/components/SnackBar/SnackBar';
import {Navigate, Route, Routes} from 'react-router-dom';
import TodolistsList from './Pages/TodolistsList/TodolistsList';

function App() {
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)
    const isLoading = useAppSelector<string>(state => state.app.appStatus) === 'loading'
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <Loader/>
    }

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Navigate to={'/todolists'}/>}/>
                <Route path={'/todolists/*'} element={<TodolistsList/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
            {isLoading && <Loader/>}
            <SimpleSnackbar/>
        </div>
    );
}

export default App;
