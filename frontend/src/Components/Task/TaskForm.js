import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
    TextField,
    RadioGroup,
    Radio,
    FormLabel,
    Button,
    Grid,
    Paper,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    FormControl,
    FormControlLabel,
    Snackbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import formStyle from '../../Styles/taskFormStyle.js';
import MuiAlert from '@material-ui/lab/Alert';

const TaskForm = ({ closeForm }) => {
    //TODO: Add post task route functionality
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [status, setStatus] = useState('Pending');
    const [taskSuccess, setTaskSuccess] = useState(false);

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const submitTask = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/tasks', {
                author: author,
                body: body,
                due_date: dueDate,
                status: status,
            });
            closeForm();
            setTaskSuccess(true);
            console.log(res);
        } catch (error) {
            if (error) {
                console.error(error);
            }
        }
    };
    const useStyles = makeStyles(formStyle);

    const setTaskSuccessFalse = () => {
        setTaskSuccess(false);
    };
    const statusOnChange = (e) => {
        setStatus(e.target.value);
    };
    const authorOnChange = (e) => {
        setAuthor(e.target.value);
    };
    const bodyOnChange = (e) => {
        setBody(e.target.value);
    };
    const dueDateOnchange = (date) => {
        setDueDate(date);
    };
    const classes = useStyles();
    return (
        <>
            <DialogTitle>Add New Task</DialogTitle>
            <Grid container spacing={1} justify="space-around" xs={12}>
                <DialogContent dividers>
                    <Grid container item>
                        <Grid item xs={6}>
                            <TextField
                                label="Author"
                                value={author}
                                size="medium"
                                className={classes.input}
                                onChange={authorOnChange}
                            />
                            <TextField
                                label="Task"
                                value={body}
                                placeholder="What to do..."
                                className={classes.input}
                                onChange={bodyOnChange}
                            />
                            <FormLabel>Due Date:</FormLabel>
                            <KeyboardDatePicker
                                value={dueDate}
                                placeholder="10/10/2018"
                                onChange={(date) => setDueDate(date)}
                                minDate={new Date()}
                                format="dd/MM/yyyy"
                                variant="inline"
                                inputVariant="outlined"
                                className={classes.input}
                                onAccept={dueDateOnchange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl component="form" onSubmit={submitTask}>
                                <FormLabel component="legend">Status</FormLabel>
                                <RadioGroup
                                    aria-label="status"
                                    name="status"
                                    value={status}
                                    onChange={statusOnChange}
                                >
                                    <FormControlLabel
                                        value="Pending"
                                        control={<Radio />}
                                        label="Pending"
                                    />
                                    <FormControlLabel
                                        value="In Progress"
                                        control={<Radio />}
                                        label="In Progress"
                                    />
                                    <FormControlLabel
                                        value="Completed"
                                        control={<Radio />}
                                        label="Completed"
                                    />
                                </RadioGroup>
                                <Grid item container justify="center" xs={12}>
                                    <Grid item>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Grid>
            <Snackbar
                open={taskSuccess}
                onClose={setTaskSuccessFalse}
                autoHideDuration={15000}
            >
                <Alert severity="success">Task sucessfully added!</Alert>
            </Snackbar>
        </>
    );
};

export default TaskForm;
