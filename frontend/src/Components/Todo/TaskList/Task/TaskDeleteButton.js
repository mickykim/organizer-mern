import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import API from '../../../api.js';
import PropTypes from 'prop-types';

const TaskDeleteButton = ({ id, updatePage }) => {
    const deleteTask = async () => {
        try {
            const res = await API.delete(`tasks/${id}`);
            console.log(res.data);
            if (updatePage) updatePage();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <IconButton aria-label="delete" onClick={deleteTask}>
            <DeleteIcon fontSize="default" />
        </IconButton>
    );
};

TaskDeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    updatePage: PropTypes.func,
};
export default TaskDeleteButton;
