import React, {useLayoutEffect} from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom';

const Page = styled.div`
    & .info {
        margin: 0 auto;
        max-width: 800px;
        //margin-top: 4rem;
        padding: 4rem 1rem;
    }

    & .panel-transparent {
        background: rgba(250, 250, 255, 0.8);
        padding: 1rem;
        border-radius: 0.3rem;
    }   

`

const RefundPolicy = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <Page>
            <Layout>
                <div className="info">
                    <div className="panel-transparent">
                    <h1>Refund Policy</h1>
                    <h3>Sizing issues</h3>
                    <p>Since your order is custom printed just for you, we aren’t responsible for refunds due to incorrect fit issues. Buyers assume all risks when choosing the style and fit of their purchase. To better help you in choosing the right size, we have made available a Size Chart. Just click on the link at the bottom of this website to find your best fit!</p>
                    <h3>Order Modifications or Cancellation</h3>
                    <p>After your order has been placed, you have 24 hours to contact our customer service team, and request order modifications or a cancellation. After 24 hours, your order has already been placed in production and can no longer be modified.</p>
                    <h3>Damaged/Incorrect Order</h3>
                    <p>At Darwin's Tees, we are doing our best to ensure product quality and order accuracy. However, the natural world is governed by chance processes and unforseen events, and it may happen that you receive a damaged item, poor-quality printing or incorrect product. Thankfully it is rather unusual, but should such a case arise, we will offer a free replacement order or a refund on the affected items.</p>
                    <p>All we need is your order number and a clear photo showing either the incorrect item, the poor quality of the print or the damaged area of the item. Please contact us by email at <b>support@darwinstees.com</b> and we will organise a reprint or a refund for you!</p>
                    <h3>Order not received</h3>
                    <p>If your item has not arrived within 30 days after having ordered, contact one of our heroes through our contact us page for a free replacement order or a full refund of your purchase. (Please note this policy excludes errors made by customers when providing incorrect shipping details on their order(s) and/or missed parcel deliveries.)</p>
                    <div style={{marginTop:'2rem', width:'100%', display:'flex', justifyContent:'center'}}>
                    <Button component={Link} to="/" variant="contained" color="primary">
                        Back to Store
                    </Button>
                    </div>
                   </div>
                </div>
            </Layout>
        </Page>
    )
}

export default RefundPolicy
