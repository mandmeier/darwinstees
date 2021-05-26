import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    margin-top: 2rem;
    z-index: 10;
    margin-bottom: 30px;

    & > a {
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 560px) {
        flex-direction: column;
        justify-content: center;
    } 


`

export const NavLink = styled(Link)`
    font-family: 'Caveat', cursive;
    font-size: 200%;
    color: mediumblue;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 2px 2rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: brown;
        font-weight: 800;
    }
`

// export const Bars = styled(FaBars)`
//     display: none;
//     color: #fff;

//     @media screen and (max-width: 768px) {
//         display: block;
//         position: absolute;
//         top: 0;
//         right: 0;
//         transform: translate(-100%, 75%);
//         font-size: 1.8rem;
//         cursor: pointer
//     }
// `

export const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    /* margin-right: -24px; */

    /* @media screen and (max-width: 768px) {
        margin-right: 0px;
        display: none;
    }  */
`
