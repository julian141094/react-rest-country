import React from 'react'
import '../Assets/css/Navi.css'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness5Icon from '@material-ui/icons/Brightness5';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

/**
 * Bar of head site, set a Dark or ligth mode
 * @param {*} darkMode Boolean 
 */
const Navigator = ({setDarkMode, dark}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Where in the world?
          </Typography>
          <IconButton edge="start" onClick={() => setDarkMode(!dark)}
            className={classes.menuButton} color="inherit" aria-label="menu">
            {dark ? <Brightness2Icon /> : <Brightness5Icon/>}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigator