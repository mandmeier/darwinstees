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
    const confirmationNumber = shopState.confirmationNumber


    return (
        <ConfMessage>
            <h3>Thank you for your purchase</h3>

            <p>Please keep the confirmation number for this order on file</p>

            <h2>{confirmationNumber}</h2>

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
