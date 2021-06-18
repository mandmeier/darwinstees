import React from 'react'
import { useSelector } from "react-redux"
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/Darwin.png'
import useStyles from './NavbarElements'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();

    const shopState = useSelector((state) => state.shopState)

    const cart = shopState.cart

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <Link to="/" className={classes.typographyStyles}>
                            <img src={logo} alt="Darwin's Tees" height="60px" className={classes.image}/>
                        </Link>
                        Darwin's Tees
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                    <Link to="/cart" className={classes.typographyStyles}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </Link>

                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
