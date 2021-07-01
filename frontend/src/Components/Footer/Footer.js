import React from 'react';
import LightButton from './LightButton';
import Copyright from './Copyright';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import footerStyle from '../../Styles/footerStyle';

const Footer = ({ prefersDarkMode, setPrefersDarkMode }) => {
    const useStyles = makeStyles(footerStyle);
    const classes = useStyles();
    return (
        <Grid container justify="center" className={classes.footer}>
            <Grid item>
                <LightButton
                    prefersDarkMode={prefersDarkMode}
                    setPrefersDarkMode={setPrefersDarkMode}
                />
            </Grid>
            <Grid item xs={12} />
            <Grid item className={classes.copyright}>
                <Copyright />
            </Grid>
        </Grid>
    );
};

export default Footer;
