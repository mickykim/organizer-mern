import TaskList from './TaskList/TaskList.js';
import TaskForm from './TaskForm/TaskForm.js';
import SuccessSnackbar from '../SnackBars/SuccessSnackbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
    Paper,
    Typography,
    Grid,
    CircularProgress,
    Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import todoStyle from '../../Styles/todoStyle';

const Todo = ({ prefersDarkMode, setPrefersDarkMode }) => {
    const [tasks, setTasks] = useState();
    const [currentTask, setCurrentTask] = useState();
    const [updatePage, setUpdatePage] = useState(false);
    const minHeight = '55vh';
    const maxHeight = '55vh';
    const minWidth = '20vw';

    const useStyles = makeStyles(todoStyle);
    const classes = useStyles();
    const toggleUpdatePage = () => {
        setUpdatePage(!updatePage);
    };

    async function fetchData() {
        const url = 'http://localhost:4000/tasks';
        try {
            const response = await axios.get(url, { crossdomain: true });
            setTasks(response.data.tasks);
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
                            className={classes.mainGrid}
                        >
                            <Grid item>
                                <Typography
                                    variant="h4"
                                    align="center"
                                    className={classes.titleTypography}
                                >
                                    Task List
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paperContainer}>
                                    <Grid
                                        container
                                        justify="center"
                                        component="main"
                                        direction="column"
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            className={classes.taskList}
                                        >
                                            <TaskList
                                                tasks={tasks}
                                                updatePage={toggleUpdatePage}
                                            />
                                        </Grid>
                                        <TaskForm
                                            updatePage={toggleUpdatePage}
                                        />
                                    </Grid>
                                </Paper>
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
            <Container maxWidth="lg">
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    component="main"
                    className={classes.loadingContainer}
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
