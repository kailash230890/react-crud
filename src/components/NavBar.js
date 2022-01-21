import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyle = makeStyles({
    header: {
        background: '#f0f3f7'
    },
    tabs:{
        color:'#50565e',
        textDecoration:'none',
        marginRight:20,
        fontSize:20
    }
})
const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <NavLink className={classes.tabs} to='/'>Task</NavLink>
                <NavLink className={classes.tabs} to='/all' style={{ marginLeft: '90%' }}>Home</NavLink>
                {/* <NavLink className={classes.tabs} to='/add'>Add User</NavLink> */}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
