import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import classes from '*.module.css';
 
const Navbar = () => {
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography>
                        
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
