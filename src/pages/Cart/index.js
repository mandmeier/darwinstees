import React, { useEffect }from 'react'
import { useSelector, useDispatch } from "react-redux"
import {emptyCart} from '../../state/actions/shopActions'

import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './CartElements'
import CartItem from '../../components/CartItem'

const Cart = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const shopState = useSelector((state) => state.shopState)
    const cart = shopState.cart

    
    const isEmpty = cart.length > 0 ? false : true



    const subtotal = Object.values(cart).reduce((t, {price}) => t + Number(price), 0).toFixed(2);


    console.log("SUBTOTAL")
    console.log(subtotal)


    const handleEmptyCart = () => {
        dispatch(emptyCart())
    }

    const handleCheckout = () => {
        console.log("Checking out, creating order")
    }


    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart yet.</Typography>
    )

    const FilledCart = () => (
        <>
         <Grid container spacing={3}>
            {cart.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item}/>
                </Grid>
            ))}
         </Grid>
        <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {subtotal}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={()=>handleEmptyCart()}>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" onClick={()=>handleCheckout()}>Checkout</Button>
                </div>
        </div>
        </>
        
    )


    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} cariant="h3">Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
            
        </Container>
    )
}

export default Cart
