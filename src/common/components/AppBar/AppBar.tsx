import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useAppDispatch, useAppSelector} from '../../../app/store';
import {logoutTC} from '../../../features/auth/authSlice';

type AppBarType = {
    title: string
}
export default function ButtonAppBar(props:AppBarType) {

    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state=>state.auth.isLoggedIn)

    const logout = () => {
        dispatch(logoutTC())
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: '#0e5b0f'}}>
                <Toolbar>
                    {/*<IconButton*/}
                    {/*    size="large"*/}
                    {/*    edge="start"*/}
                    {/*    color="inherit"*/}
                    {/*    aria-label="menu"*/}
                    {/*    sx={{ mr: 2 }}*/}
                    {/*>*/}
                    {/*    <MenuIcon />*/}
                    {/*</IconButton>*/}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {props.title}
                    </Typography>
                    {isLoggedIn ? <Button onClick={logout} color="inherit">Logout</Button> : null}
                </Toolbar>
            </AppBar>
        </Box>
    );
}