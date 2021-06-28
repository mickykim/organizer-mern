import React from 'react';
import { Button } from '@material-ui/core';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const LightButton = ({ prefersDarkMode, setPrefersDarkMode }) => {
    //Detect which mode is preferred from https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting
    const detectColorScheme = () => {
        let theme = 'light'; //default to light

        //local storage is used to override OS theme settings
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                theme = 'dark';
            }
        } else if (!window.matchMedia) {
            //matchMedia method not supported
            return false;
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            //OS theme setting detected as dark
            theme = 'dark';
        }

        //dark theme preferred, set document with a `data-theme` attribute
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        return theme;
    };

    //function that changes the theme, and sets a localStorage variable to track the theme between page loads
    const toggleTheme = (e) => {
        const theme = detectColorScheme();
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
