import AddIcon from '@material-ui/icons/Add';
import { Fab, Tooltip } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import HideBetweenOnScroll from '../../Hide/HideBetweenOnScroll';
const AddButton = ({ openForm }) => {
    return (
        <HideBetweenOnScroll>
            <Tooltip
                title="Add Task"
                aria-label="add task"
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                }}
            >
                <Fab color="primary" aria-label="add" onClick={openForm}>
                    <AddIcon />
                </Fab>
            </Tooltip>
        </HideBetweenOnScroll>
    );
};

AddButton.propTypes = {
    openForm: PropTypes.func.isRequired,
};
export default AddButton;
