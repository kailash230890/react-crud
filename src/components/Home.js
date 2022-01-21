import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import AllUsers from './AllUsers';


const useStyle = makeStyles({
  header: {
    background: '#f0f3f7'
  },
  tabs: {
    color: '#50565e',
    textDecoration: 'none',
    marginRight: 50,
    fontSize: 20
  }
})
const Home = () => {
  const classes = useStyle();
  return (
    <>
      <AppBar className={classes.header} position='static'>
        <Toolbar>
          <NavLink className={classes.tabs} to='/add'>Add User</NavLink>
        </Toolbar>
        <AllUsers />
      </AppBar>
    </>
  );
};

export default Home;
