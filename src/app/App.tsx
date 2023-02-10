import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from './store';
import {initializeAppTC} from './appSlice';
import {logoutTC} from '../features/auth/authSlice';
import {stat} from 'fs';
import Login from '../features/auth/Login';

function App() {
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)
    const isLogged = useAppSelector<boolean>(state=>state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])


    const logout = () => {
        dispatch(logoutTC())
    }

    if (!isInitialized) {
        return <div>Loading</div>
    }
    if (!isLogged) {
        return <div>
            You are not logged in!
            <Login/>
        </div>
    }

    return (
        <div className="App">
            HELLO
            <button onClick={logout}>logout</button>
        </div>
    );
}

export default App;
