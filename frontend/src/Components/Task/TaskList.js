import PropTypes from 'prop-types'; //impt + tab
import React, { useState, useEffect } from 'react'; //imrse + tab
import Task from './Task';
import { Grid, List, Divider, ListItem } from '@material-ui/core';

//rafce + tab
const TaskList = ({ tasks }) => {
    //TODO: Fix unique key for each child element in a list
    return (
        <List>
            <Task task={tasks[0]} uniqueKey={tasks[0]._id} key={tasks[0]._id} />
            {tasks.slice(1).map((task, i) => (
                <>
                    <Divider key={i} />
                    <Task
                        task={task}
                        uniqueKey={tasks[0]._id}
                        key={tasks[0]._id}
                    />
                </>
            ))}
        </List>
    );
};

TaskList.defaultProps = {};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
};

export default TaskList;
