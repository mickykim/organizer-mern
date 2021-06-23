import AddIcon from '@material-ui/icons/Add';
import { Grid, Fab } from '@material-ui/core';
import React from 'react';

const AddButton = ({ toggleForm }) => {
    return (
        <Grid container item direction="row">
            <Grid item alignSelf="flex-end">
                <Fab color="primary" aria-label="add" onClick={toggleForm}>
                    <AddIcon />
                </Fab>
            </Grid>
        </Grid>
    );
};

export default AddButton;
