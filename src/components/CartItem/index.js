import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from './CartItemElements'
import EvoTee from '../../components/EvoTee'
import { useSelector, useDispatch } from "react-redux"
import {removeItem} from '../../state/actions/shopActions'
import SVG from 'react-inlinesvg'



const CartItem = ({item}) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const lineTotal = item.price // * qty


    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId))
    }

    return (
        <div>
            <SVG src={item.design.svg} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">T-shirt</Typography>
                <Typography variant="h5">{lineTotal}</Typography>
            </CardContent>
            <CardActions>
                <div className={classes.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>quantity</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
                    <Button type="button" variant="contained" color="secondary" onClick={()=>handleRemoveItem(item.itemId)}>Remove</Button>
            </CardActions>
        </div>
    )
}

export default CartItem
