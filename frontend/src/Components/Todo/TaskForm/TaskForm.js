import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    RadioGroup,
    Radio,
    FormLabel,
    Button,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import formStyle from '../../../Styles/taskFormStyle.js';
import SaveIcon from '@material-ui/icons/Save';
import ShowFormButton from './ShowFormButton.js';
import API from '../../api.js';
import PaperComponent from './PaperComponent.js';

const TaskForm = ({ updatePage }) => {
    //TODO: Add post task route functionality
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [status, setStatus] = useState('Pending');
    const [showForm, setShowForm] = useState(false);

    const openForm = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const submitTask = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/tasks', {
                author: author,
                body: body,
                due_date: dueDate,
                status: status,
            });
            closeForm();
            updatePage();
            console.log(res);
        } catch (error) {
            if (error) {
                console.error(error);
            }
        }
    };

    const useStyles = makeStyles(formStyle);
    const classes = useStyles();

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

    if (!showForm) {
        return <ShowFormButton openForm={openForm} />;
    }
    return (
        <Dialog
            open={showForm}
            onClose={closeForm}
            PaperComponent={PaperComponent}
        >
            <DialogTitle
                id="draggable-dialog-title"
                className={classes.draggable}
            >
                Add New Task
            </DialogTitle>
            <DialogContent dividers style={{ overflow: 'hidden' }}>
                <Grid container spacing={0} justify="space-around" xs={12}>
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
                                            startIcon={<SaveIcon />}
                                        >
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default TaskForm;
