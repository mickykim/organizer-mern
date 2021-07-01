import React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const loginRedirect = () => {
        history.push('/');
    };
    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Todo</Typography>
                <Button color="inherit" onClick={loginRedirect}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
