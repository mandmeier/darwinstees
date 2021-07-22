import React from 'react'
import { useSelector } from "react-redux"
import { Typography, Divider, List, ListItem, ListItemText } from '@material-ui/core'
import SVG from 'react-inlinesvg';
import styled from 'styled-components'
import tee from '../../assets/Tshirt.png'



const Tshirtwrapper = styled.div`
    width: 4rem;
    margin-right: 1rem;
    & .tshirt {
        background-image: url(${tee});
        background-repeat:no-repeat;
        background-position: center top;
        background-size: contain;
        position: relative;
    }

    & img {
        width: 100%;
        visibility: hidden;
    }
    & .tshirt-content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    & .print-area-wrapper {
        margin: 12% auto 0 25%;
        width: 45%;
        padding-bottom: calc(45% / 0.875);
        position: relative;
        /* background: yellow; */
    }

    & .print-area {
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;

        color: white;
        font-size: 24px;
        text-align: center;
    }

    & .svg-container {
        width: 100%;
        height: 100%;
        position: relative
    }

    & .evo-svg{
        position: absolute;
        width: 100%;
        height: 100%;
        /* background-color: blue; */
    }

    & .evo0 {
        top: 6.25%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }
`

const ProductInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & .qty-price {
        width: 40%;
        display: flex;
        justify-content: space-between;
    }

`


const Review = ({cost, shippingData}) => {

    const {subtotal, shipping, taxes, total} = cost

    const shopState = useSelector((state) => state.shopState)
    const cart = shopState.cart

    function capitalize(word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }


    // firstName: shippingData.firstName,
    //             lastName: shippingData.lastName,
    //             email: shippingData.email,
    //             street: shippingData.address1,
    //             city: shippingData.city,
    //             postal_zip_code: shippingData.zip,
    //             country: shippingData.country,
    //             region_state:  shippingData.region,

    return (
        <>
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }} >Delivery To</Typography>
            <div>{`${shippingData.firstName} ${shippingData.lastName}`}</div>
            <div>{shippingData.address1}</div>
            <div>{`${shippingData.city}, ${shippingData.region}`}</div>
            <div>{`${shippingData.country} ${shippingData.zip}`}</div>
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }} >Order Summary</Typography>
            <Divider />
            <List disablePadding>
                {cart.map((item) => (
                    <ListItem style={{padding: '10px 0'}} key={item._id}>
                        <Tshirtwrapper>
                            <div className="tshirt">
                                <img src={tee} alt="tshirt"/>
                                <div className="tshirt-content">
                                    <div className="print-area-wrapper">
                                        <div className="print-area">
                                            <div className="svg-container">
                                                <SVG src={item.design.svg} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tshirtwrapper>
                        <ProductInfo>
                        <div>
                            <div>{item.product.name}</div>
                            <div><i>{`${capitalize(item.design.lineage)}`}</i></div>
                            <small>{`Gen ${item.design.generation}`}</small>
                        </div>
                        <div className="qty-price">
                            <small variant="body2">{`Qty: ${item.qty}`}</small>
                            <Typography variant="body2">${(item.product.price  * item.qty).toFixed(2)}</Typography>
                        </div>
                        </ProductInfo>
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
