import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    CssBaseline,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Typography,
    Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todo from './Todo/Todo.js';
import React, { useState } from 'react';

// Create a theme instance based on user

const App = () => {
    const [prefersDarkMode, setPrefersDarkMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)')
    );
    const [updateTheme, setUpdateTheme] = useState(false);

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode]
    );

    const toggleTheme = () => {
        setUpdateTheme(!updateTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Todo</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Router>
                    <Switch>
                        <Route path="/">
                            <Grid item xs={12}>
                                <Todo
                                    prefersDarkMode={prefersDarkMode}
                                    setPrefersDarkMode={setPrefersDarkMode}
                                    toggleTheme={toggleTheme}
                                />
                            </Grid>
                        </Route>
                    </Switch>
                </Router>
            </Grid>
        </ThemeProvider>
    );
};

export default App;
