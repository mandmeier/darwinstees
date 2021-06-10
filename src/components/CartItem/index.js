import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from './CartItemElements'
import EvoTee from '../../components/EvoTee'


const CartItem = ({item}) => {
    const classes = useStyles();

    const lineTotal = item.price // * qty


    return (
        <div>
            <EvoTee evo={item.displayedEvos[0]}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">T-shirt</Typography>
                <Typography variant="h5">{lineTotal}</Typography>
            </CardContent>
            <CardActions>
                <div className={classes.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>{item.qty}</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
            </CardActions>
        </div>
    )
}

export default CartItem
