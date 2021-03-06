import React, {useLayoutEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {emptyCart} from '../../state/actions/shopActions'
import Layout from '../../components/Layout'
import { Typography, Button, Grid } from '@material-ui/core'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';
import shopping_icon from '../../assets/evo_shopping.png'
import styled from 'styled-components'


const CartContainer = styled.div`
    padding: 0 1rem;
    max-width: 800px !important;
    margin: 0 auto;

    /* & .cart-item-container {
        margin: 0 auto;
        max-width: 800px;
    } */

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
        max-width: 400px;
        text-align: center;
    }

    & .summary{
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 599px) {
            flex-direction: column;
        }


    }

    & .free-shipping {
        text-align: center;

        & .subtotal {
            //text-align: center;
            @media (max-width: 599px) {
                margin-top: 1rem;
            }
        }

        & small {
           margin: 0
        }

        @media (max-width: 599px) {
                margin-bottom: 1rem;
        }

    }

`


const Cart = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const dispatch = useDispatch();

    const shopState = useSelector((state) => state.shopState)
    const cart = shopState.cart
    const isEmpty = cart.length > 0 ? false : true

    const subtotal = Object.values(cart).reduce((t, {product, qty}) => t + Number(product.price)*qty, 0).toFixed(2);

    const handleEmptyCart = () => {
        dispatch(emptyCart())
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
            <Button className={"empty-button"} size="small" type="button" variant="outlined" color="secondary" onClick={()=>handleEmptyCart()}>Empty Cart</Button>
                <div className="free-shipping">
                    <Typography className={"subtotal"} variant="h6">Subtotal: ${subtotal}</Typography>
                    <small >{subtotal < 60 ? "??? Get free delivery on orders over $60 ???" : "??? Delivery is FREE ???"}</small>
                </div>          
            <Button component={Link} to="/checkout" className={"checkout-button"} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
        </>
        
    )


    return (
        <Layout>
            <CartContainer>
                    <div className="cart-title panel-transparent" >
                        <h1>Cart</h1> <img src={shopping_icon} alt="shopping evolution" height="45px" loading="lazy"/>
                    </div>
                    {isEmpty ? <EmptyCart /> : <FilledCart />}
            </CartContainer>
        </Layout>
    )
}

export default Cart
