import React from 'react'
import { Nav, NavLink, NavMenu } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <div>LOGO</div>
                <NavMenu>
                    <NavLink exact to="/" activeStyle>Home</NavLink>
                    <NavLink to="/about" activeStyle>About</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
