import React from 'react';
import { Button } from '@material-ui/core';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const LightButton = ({ prefersDarkMode, setPrefersDarkMode }) => {
    //function that changes the theme, and sets a localStorage variable to track the theme between page loads
    const toggleTheme = (e) => {
        if (prefersDarkMode) {
            setPrefersDarkMode(false);
        } else {
            setPrefersDarkMode(true);
        }
    };
    return (
        <Button
            variant="contained"
            size="large"
            startIcon={<WbIncandescentIcon />}
            onClick={toggleTheme}
        >
            Toggle Lights
        </Button>
    );
};

export default LightButton;
