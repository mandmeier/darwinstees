import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'


const Review = () => {

    const shopState = useSelector((state) => state.shopState)
    const cart = shopState.cart

    return (
        <>
            <Typography varint="h6">Order Summary</Typography>
            <List disablePadding>
                {cart.map((item) => (
                    <ListItem style={{padding: '10px 0'}} key={item._id}>
                        <ListItemText primary={item.product.name} secondary={`Quantity: ${item.qty}`}/>
                        <Typography variant="body2">Line total $$$</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0' }}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        Subtotal $$$
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
