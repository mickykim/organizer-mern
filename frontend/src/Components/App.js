import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todo from './Todo/Todo.js';
import React, { useState } from 'react';
import LogIn from './LogIn/LogIn';
import Register from './Register/Register';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// Create a theme instance based on user

const App = () => {
    const [prefersDarkMode, setPrefersDarkMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)')
    );
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Grid item xs={12}>
                            <LogIn />
                        </Grid>
                        <Footer
                            prefersDarkMode={prefersDarkMode}
                            setPrefersDarkMode={setPrefersDarkMode}
                        />
                    </Route>

                    <Route path="/register">
                        <Register />
                        <Footer
                            prefersDarkMode={prefersDarkMode}
                            setPrefersDarkMode={setPrefersDarkMode}
                        />
                    </Route>

                    <Route path="/todo">
                        <Header />
                        <Todo />
                        <Footer
                            prefersDarkMode={prefersDarkMode}
                            setPrefersDarkMode={setPrefersDarkMode}
                        />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
