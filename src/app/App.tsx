import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from './store';
import {initializeAppTC} from './appSlice';
import {logoutTC} from '../features/auth/authSlice';
import Login from '../features/auth/Login';
import Loader from '../common/components/Loader/Loader';
import SimpleSnackbar from '../common/components/SnackBar/SnackBar';

function App() {
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)
    const isLogged = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const isLoading = useAppSelector<string>(state => state.app.appStatus) === 'loading'
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])


    const logout = () => {
        dispatch(logoutTC())
    }

    if (!isInitialized) {
        return <Loader/>
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
            {isLoading && <Loader/>}
            <SimpleSnackbar/>
        </div>
    );
}

export default App;
