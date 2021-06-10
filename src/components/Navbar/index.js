import React from 'react'
import { useSelector } from "react-redux"
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/Darwin.png'
import useStyles from './NavbarElements'

const Navbar = () => {
    const classes = useStyles();

    const shopState = useSelector((state) => state.shopState)

    const cart = shopState.cart

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Darwin's Tees" height="60px" className={classes.image}/>
                        Darwin's Tees
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
