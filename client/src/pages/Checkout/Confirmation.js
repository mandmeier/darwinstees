import React from 'react'
import { useSelector } from "react-redux"
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';


const ConfMessage = styled.div`
    margin-top: 2rem;
    min-height: 10rem;
    text-align: center;
`


const Confirmation = () => {


    const shopState = useSelector((state) => state.shopState)
    const { orderId } = shopState


    return (
        <ConfMessage style={{wordWrap: "break-word"}}>
            <h2>Thank you for your purchase</h2>
            <p>Please keep the order number on file</p>
            <h2>{orderId}</h2>
            <br/>
            <Button component={Link} to="/" size="large" type="button" variant="contained" color="primary">Back to Store</Button>
            <br/>
            <br/>
            <small>(Don't forget to upvote your favorite mutants!)</small>
            <br/>
            <br/>
        </ConfMessage>
    )
}

export default Confirmation
