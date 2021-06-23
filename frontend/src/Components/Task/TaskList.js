import PropTypes from 'prop-types'; //impt + tab
import React, { useState, useEffect } from 'react'; //imrse + tab
import Task from './Task';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

//rafce + tab
const TaskList = ({ tasks }) => {
    if (!tasks) {
        return <Typography variant="h4">Task List</Typography>;
    }

    return (
        <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Typography variant="h4">Task List</Typography>
            <div>
                {tasks.map((task) => (
                    <Grid item xs={12}>
                        <Task key={task._id} task={task} />
                    </Grid>
                ))}
            </div>
        </Grid>
    );
};

TaskList.defaultProps = {};

TaskList.propTypes = {};

export default TaskList;
