import './App.css';
import TaskList from './Task/TaskList.js';
import TaskForm from './Task/TaskForm.js';
import ShowFormButton from './ShowFormButton';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    Paper,
    Typography,
    Grid,
    CircularProgress,
    Container,
    Dialog,
    CssBaseline,
} from '@material-ui/core';
import Draggable from 'react-draggable';

const App = () => {
    //TODO: Toggle dark mode buttton

    const [tasks, setTasks] = useState();
    const [currentTask, setCurrentTask] = useState();
    const [showForm, setShowForm] = useState(false);
    const theme = createMuiTheme({
        palette: {
            type: 'dark',
        },
    });

    const openForm = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    async function fetchData() {
        const url = 'http://localhost:4000/tasks';
        try {
            const response = await axios.get(url, { crossdomain: true });
            setTasks(response.data);
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    function PaperComponent(props) {
        return (
            <Draggable
                handle="#draggable-dialog-title"
                cancel={'[class*="MuiDialogContent-root"]'}
            >
                <Paper {...props} />
            </Draggable>
        );
    }

    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        fetchData();
    }, [showForm]);

    if (tasks) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Container maxWidth="xs">
                        <Typography variant="h4" align="center">
                            Task List
                        </Typography>
                        <Paper>
                            <Grid
                                container
                                justify="center"
                                component="main"
                                direction="column"
                                style={{ maxHeight: '70vh' }}
                            >
                                <Grid item xs={12}>
                                    <TaskList tasks={tasks} />
                                </Grid>

                                <Dialog
                                    open={showForm}
                                    onClose={closeForm}
                                    PaperComponent={PaperComponent}
                                >
                                    <TaskForm closeForm={closeForm} />
                                </Dialog>

                                <Grid
                                    container
                                    justify="flex-end"
                                    style={{ padding: '15px' }}
                                >
                                    <Grid item xs={2}>
                                        <ShowFormButton openForm={openForm} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        );
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    component="main"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item>
                        <CircularProgress></CircularProgress>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default App;
