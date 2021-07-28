import React from 'react'
import Navbar from '../Navbar/'
import Footer from '../Footer/'
import { Main } from './LayoutElements'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)


const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar/>
                <Main style={{ backgroundImage: `url(/img/black_sand3.webp)`, backgroundPosition:"center", backgroundSize: "cover"}}>
                    <Elements stripe={stripePromise}>
                        {children}
                    </Elements>
                </Main>
            <Footer/> 
        </div>
    )
}

export default Layout
