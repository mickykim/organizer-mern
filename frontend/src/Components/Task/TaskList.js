import PropTypes from 'prop-types'; //impt + tab
import React, { useState, useEffect } from 'react'; //imrse + tab
//rafce + tab
const TaskList = (props) => {
    if (!props.tasks) {
        return (
            <div>
                <div>Task List</div>
                <h2>F</h2>
            </div>
        );
    }

    return (
        <div>
            <div>Task List</div>
            <div>
                <ul>
                    {props.tasks.map((task) => (
                        <li key={task._id}>{task.body}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

TaskList.defaultProps = {};

TaskList.propTypes = {};

export default TaskList;
