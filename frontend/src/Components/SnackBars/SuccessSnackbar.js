import { Snackbar } from '@material-ui/core';
import React, { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';

const SuccessSnackbar = () => {
    const [taskSuccess, setTaskSuccess] = useState(false);

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const toggleSuccessAlert = () => {
        setTaskSuccess(!taskSuccess);
    };

    return (
        <Snackbar
            open={taskSuccess}
            onClose={toggleSuccessAlert}
            autoHideDuration={15000}
        >
            <Alert severity="success">Task sucessfully added!</Alert>
        </Snackbar>
    );
};

export default SuccessSnackbar;
