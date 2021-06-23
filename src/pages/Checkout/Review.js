import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Typography, Divider, List, ListItem, ListItemText } from '@material-ui/core'


const Review = ({cost}) => {

    const {subtotal, shipping, taxes, total} = cost

    const shopState = useSelector((state) => state.shopState)
    const cart = shopState.cart


    return (
        <>
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }} >Order Summary</Typography>
            <Divider />
            <List disablePadding>
                {cart.map((item) => (
                    <ListItem style={{padding: '10px 0'}} key={item._id}>
                        <ListItemText primary={item.product.name} secondary={`Quantity: ${item.qty}`}/>
                        <Typography variant="body2">Line total: ${(item.product.price  * item.qty).toFixed(2)}</Typography>
                    </ListItem>
                ))}
                <Divider />
                <ListItem style={{padding: '0' }}>
                    <ListItemText primary="Subtotal"/>
                    <Typography variant="subtitle1">
                        ${subtotal}
                    </Typography>
                </ListItem>
                <ListItem style={{padding: '0 0 0 2rem'}}>
                    <ListItemText primary="Shipping"/>
                    {shipping > 0
                    ? <Typography variant="body2">+ ${shipping}</Typography>
                    : <Typography style={{fontStyle: "italic"}} variant="body2">FREE</Typography>
                    }
                   
                </ListItem>
                <ListItem style={{padding: '0 0 0 2rem'}}>
                    <ListItemText primary="Taxes"/>
                    <Typography variant="body2">
                        + ${taxes}
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem style={{padding: '10px 0' }}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        ${total}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
