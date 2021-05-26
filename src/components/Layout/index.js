import React from 'react'
import Navbar from '../Navbar/'
import Footer from '../Footer/'
import { Page, Main } from './LayoutElements'
//import "./components.css"


const Layout = ({children}) => {
    return (
        <Page>
            <Navbar/>
                <Main>{children}</Main>
            <Footer/> 
        </Page>
    )
}

export default Layout
