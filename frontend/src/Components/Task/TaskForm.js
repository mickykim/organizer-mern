import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
    TextField,
    RadioGroup,
    Radio,
    FormControl,
    FormControlLabel,
    FormLabel,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import formStyle from '../../Styles/taskFormStyle';

const TaskForm = ({ showForm }) => {
    //!Move the logic and state to the root app
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [status, setStatus] = useState('Pending');
    const submitTask = () => {
        axios.post('localhost:4000/tasks', {
            author: author,
            body: body,
            due_date: dueDate,
            status: status,
        });
    };
    const useStyles = makeStyles(formStyle);
    const statusOnChange = (e) => {
        setStatus(e.target.value);
    };
    const classes = useStyles();
    return (
        showForm && (
            <FormControl>
                <TextField label="Author" value={author} />
                <TextField variant="outlined" label="Task" value={body} />
                <KeyboardDatePicker
                    clearable
                    value={dueDate}
                    placeholder="10/10/2018"
                    onChange={(date) => setDueDate(date)}
                    minDate={new Date()}
                    format="MM/dd/yyyy"
                />
                <FormControl component="fieldset">
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
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Submit
                </Button>
            </FormControl>
        )
    );
};

TaskForm.propTypes = {};

export default TaskForm;
