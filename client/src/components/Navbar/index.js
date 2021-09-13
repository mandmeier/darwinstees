import React from 'react'
import { useSelector } from "react-redux"
import { IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/bird_logo_2500x500.svg'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #fafaff;
    padding: 0.5rem 1rem 0 1rem;

    @media (max-width: 599px) {
        padding: 0 0.5rem;
        position: sticky;
        top: 0;
        z-index: 9;
    }
   
    & .logo {
        display: flex;
        align-items: center;
    }
`

const Navbar = () => {

    const location = useLocation()

    const shopState = useSelector((state) => state.shopState)

    const cart = shopState.cart

    const ImOnHome = location.pathname === '/' || location.pathname.includes("/shop/") ? true : false

    return (
            <Nav>
                    <Typography className="logo" component={Link} to="/"variant="h6" color="inherit">
                        <img src={logo} alt="Darwin's Tees" height="40px" loading="lazy"/>
                    </Typography>
                    <div className="cart-btn">
                    { ImOnHome && (
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    )}
                    </div>

            </Nav>
    )
}

export default Navbar