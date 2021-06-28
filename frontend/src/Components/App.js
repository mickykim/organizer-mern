import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import {
    CssBaseline,
    useMediaQuery,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Typography,
    Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { light } from '@material-ui/core/styles/createPalette';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
            <Grid container>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6">News</Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
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
