import AddIcon from '@material-ui/icons/Add';
import { Fab, Tooltip } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ openForm }) => {
    return (
        <Tooltip title="Add Task" aria-label="add task">
            <Fab color="primary" aria-label="add" onClick={openForm}>
                <AddIcon />
            </Fab>
        </Tooltip>
    );
};

AddButton.propTypes = {
    openForm: PropTypes.func.isRequired,
};
export default AddButton;
