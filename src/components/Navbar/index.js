import React from 'react'
import { useSelector } from "react-redux"
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/Darwin.png'
import useStyles from './NavbarElements'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles()

    const location = useLocation()

    const shopState = useSelector((state) => state.shopState)

    const cart = shopState.cart

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/"variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Darwin's Tees" height="60px" className={classes.image}/>
                        Darwin's Tees
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                    {location.pathname === '/' && (
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    )}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
