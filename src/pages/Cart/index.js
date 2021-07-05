import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {emptyCart} from '../../state/actions/shopActions'
import Layout from '../../components/Layout'
import { Typography, Button, Grid } from '@material-ui/core'
import useStyles from './CartElements'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';
import shopping_icon from '../../assets/evo_shopping.png'
import styled from 'styled-components'


const CartContainer = styled.div`
    padding: 1rem;

    & .cart-item-container {
        margin: 0 auto;
        max-width: 800px;
    }

    & .cart-items {
        margin: 3rem auto;
    }

    & .panel-transparent {
        background: rgba(250, 250, 255, 0.8);
        padding: 0.5rem;
        border-radius: 0.3rem;
    }

    & .cart-title {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & h1 {
            margin: 0;
        }
    }

    & .cart-empty {
        margin: 6rem auto;
        width: 50%;
        text-align: center;
    }

    & .summary{
        padding: 1rem;
        display: flex;
        justify-content: space-between;
    }

`


const Cart = () => {

    // layout idea https://myfihu.com/cart

    const classes = useStyles();
    const dispatch = useDispatch();

    const shopState = useSelector((state) => state.shopState)
    const cart = shopState.cart
    const isEmpty = cart.length > 0 ? false : true

    const subtotal = Object.values(cart).reduce((t, {product, qty}) => t + Number(product.price)*qty, 0).toFixed(2);

    console.log(`Subtotal: ${subtotal}`)

    const handleEmptyCart = () => {
        dispatch(emptyCart())
    }

    const handleCheckout = () => {
        console.log("Checking out, creating order")
    }


    const EmptyCart = () => (
        <div className="cart-empty panel-transparent">
            <p>You have no items in your cart.</p>
            <Button component={Link} to="/" size="large" type="button" variant="contained" color="primary">Go find something cool</Button>
            <p></p>
        </div>
    )

    const FilledCart = () => (
        <>
        <div className="cart-items">
            <Grid container spacing={3}>
                {cart.map((item) => (
                    <Grid item xs={12} sm={4} md={3} key={item.itemId}>
                        <CartItem item={item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
        <div className="summary panel-transparent">
                <Typography variant="h4">Subtotal: ${subtotal}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={()=>handleEmptyCart()}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" onClick={()=>handleCheckout()}>Checkout</Button>
                </div>
        </div>
        </>
        
    )


    return (
        <Layout>
            <CartContainer>
                <div className="cart-item-container ">
                    <div className={classes.toolbar}/>
                    <div className="cart-title panel-transparent" >
                        <h1>Cart</h1> <img src={shopping_icon} alt="shopping evolution" height="45px"/>
                    </div>
                    {isEmpty ? <EmptyCart /> : <FilledCart />}
                </div>
            </CartContainer>
        </Layout>
    )
}

export default Cart
