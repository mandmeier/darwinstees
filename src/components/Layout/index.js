import React from 'react'
import Navbar from '../Navbar/'
//import Footer from '../Footer/'
import { Main } from './LayoutElements'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar/>
                <Main>{children}</Main>
            {/* <Footer/>  */}
        </div>
    )
}

export default Layout
