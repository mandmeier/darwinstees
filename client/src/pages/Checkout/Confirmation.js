import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { emptyCart } from '../../state/actions/shopActions'


const ConfMessage = styled.div`
    margin-top: 2rem;
    min-height: 10rem;
    text-align: center;
`


const Confirmation = () => {

    const dispatch = useDispatch();

    const shopState = useSelector((state) => state.shopState)
    const {confirmationNumber, success, message} = shopState


    useEffect(() => {
        console.log(success)
        if (success) {
            // reset cart
            dispatch(emptyCart())
        }  
    }, [dispatch, success])
    

    return (
        <ConfMessage style={{wordWrap: "break-word"}}>
            {success ?
            (
                <>
                    <h2>Thank you for your purchase</h2>
                    <p>Please keep the order number on file</p>
                    <h2>{confirmationNumber}</h2>
                    <br/>
                    <Button component={Link} to="/" size="large" type="button" variant="contained" color="primary">Back to Store</Button>
                    <br/>
                    <br/>
                    <small>(Don't forget to upvote your favorite mutants!)</small>
                    <br/>
                    <br/>
                </>
            ) :
            (
                <>
                <p>Your order could not be placed at the moment due to an error:</p>
                <small>{message}</small>
                <br/>
                <br/>
                <p>If this does not help please contact us at <b>support@darwinstees.com</b></p>
                <p>We apologize for the inconvenience.</p>
                <br/>
                <Button component={Link} to="/" size="large" type="button" variant="contained" color="primary">Back to Store</Button>
                <br/>
                </>
            )
            }
            
        </ConfMessage>
    )
}

export default Confirmation
