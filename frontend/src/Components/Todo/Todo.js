import TaskList from './TaskList/TaskList.js';
import TaskForm from './TaskForm/TaskForm.js';
import SuccessSnackbar from '../SnackBars/SuccessSnackbar';
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
    CssBaseline,
} from '@material-ui/core';
import LightButton from '../LightButton';

const Todo = ({ prefersDarkMode, setPrefersDarkMode }) => {
    //TODO: Toggle dark mode buttton

    const [tasks, setTasks] = useState();
    const [currentTask, setCurrentTask] = useState();
    const [updatePage, setUpdatePage] = useState(false);

    const toggleUpdatePage = () => {
        setUpdatePage(!updatePage);
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

    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        fetchData();
    }, [updatePage]);

    if (tasks) {
        return (
            <>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Container>
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justify="center"
                            alignContent="center"
                            style={{ minHeight: '100vh' }}
                        >
                            <Grid item style={{ paddingBottom: '2em' }}>
                                <Typography variant="h4" align="center">
                                    Task List
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Paper
                                    style={{
                                        minHeight: '55vh',
                                        minWidth: '20vw',
                                        overflow: 'auto',
                                    }}
                                >
                                    <Grid
                                        container
                                        justify="center"
                                        component="main"
                                        direction="column"
                                        maxWidth="xs"
                                    >
                                        <Grid item xs={12}>
                                            <TaskList
                                                tasks={tasks}
                                                updatePage={toggleUpdatePage}
                                            />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    justify="space-around"
                                    style={{
                                        paddingTop: '15px',
                                        minWidth: '20vw',
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={7}
                                        style={{ paddingTop: '10px' }}
                                    >
                                        <LightButton
                                            prefersDarkMode={prefersDarkMode}
                                            setPrefersDarkMode={
                                                setPrefersDarkMode
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TaskForm
                                            updatePage={toggleUpdatePage}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <SuccessSnackbar />
                        </Grid>
                    </Container>
                </MuiPickersUtilsProvider>
            </>
        );
    }
    return (
        <>
            ={' '}
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
        </>
    );
};

export default Todo;
