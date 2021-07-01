import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todo from './Todo/Todo.js';
import React, { useState } from 'react';
import LogIn from './LogIn/LogIn';
import Register from './Register/Register';
import Header from './Header/Header';

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
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Grid item xs={12}>
                            <LogIn />
                        </Grid>
                    </Route>

                    <Route path="/todo">
                        <Header />
                        <Todo
                            prefersDarkMode={prefersDarkMode}
                            setPrefersDarkMode={setPrefersDarkMode}
                            toggleTheme={toggleTheme}
                        />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
