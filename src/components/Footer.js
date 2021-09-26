import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export default function Footer() {
  return (
    <>
     
      <ButtonAppBar />
    </>
  );
}

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
function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='footer'>
      <AppBar id='nav-bar' position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'></IconButton>
          <h2>all Rights reserved @ Dunia Alkilany 2021</h2>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}