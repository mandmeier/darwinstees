import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Typography, Button, Divider } from '@material-ui/core'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import Review from './Review'
import { resetShop, processOrder, emptyCart} from '../../state/actions/shopActions'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#000",
			color: "#000",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#888" },
			"::placeholder": { color: "#888" }
		},
		invalid: {
			iconColor: "#C00001",
			color: "#C00001"
		}
	},
    hidePostalCode: true,

}



const PaymentForm = ({shippingData, backStep, nextStep}) => {

    const dispatch = useDispatch();
    const shopState = useSelector((state) => state.shopState)
    var { cart, orderSuccess, errorMessage } = shopState


    const [processing, setProcessing] = useState(false)


    const [backDisabled, setBackDisabled] = useState(false)
    const [nextDisabled, setNextDisabled] = useState(false)
    const [nextText, setNextText] = useState("Place Order")

    const stripe = useStripe()
    const elements = useElements()

    useEffect(() => {
        if (errorMessage !== '') {
            dispatch(resetShop())
        }
    }, [dispatch, errorMessage])

    useEffect(() => {
        if (errorMessage !== '') {
            setBackDisabled(false)
            setNextDisabled(true)
            setNextText("Order Halted")
        } else {
            setBackDisabled(false)
            setNextDisabled(false)
            setNextText("Place Order")
        }
        if(processing & errorMessage === ''){
            setBackDisabled(true)
            setNextDisabled(true)
            setNextText("Processing...")
        } 
    }, [processing, errorMessage, shippingData, cart])

    useEffect(() => {
        if (orderSuccess) {
            dispatch(emptyCart())
            nextStep()
        } 
    }, [orderSuccess, dispatch, nextStep])



    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault()


        if(!stripe || !elements) return

        setProcessing(true)


        // create order with printful

        // create order data
        const orderItems = []
        cart.forEach(item => {
            orderItems.push({
            item_id: item._id,
            itemId: item.itemId,
            product: item.product,
            design_name: item.design.name,
            qty: item.qty
            })
        })

        const orderData = {
            items: orderItems,
            shipping: {
                firstName: shippingData.firstName,
                lastName: shippingData.lastName,
                email: shippingData.email,
                street: shippingData.address1,
                city: shippingData.city,
                postal_zip_code: shippingData.zip,
                country: shippingData.country,
                countryCode: shippingData.countryCode,
                region:  shippingData.region,
                regionCode: shippingData.regionCode,
            },
            

        }

        dispatch(processOrder(orderData, stripe, elements))

    }


    // const reviewData = {
    //     subtotal: Object.values(cart).reduce((t, {product, qty}) => t + Number(product.price)*qty, 0).toFixed(2),
    //     shippingCost: subtotal >= 50 ? 0 : 5.99,
    //     taxes: ((Number(subtotal) + Number(shipping)) * 0.0725).toFixed(2),
    //     total: (Number(subtotal) + Number(shipping) + Number(taxes)).toFixed(2),
    //     shippingData,
    // }

    const subtotal = Object.values(cart).reduce((t, {product, qty}) => t + Number(product.price)*qty, 0).toFixed(2);
    const shipping = subtotal >= 50 ? 0 : 5.99
    const taxes =  ((Number(subtotal) + Number(shipping)) * 0.0725).toFixed(2)
    const total = (Number(subtotal) + Number(shipping) + Number(taxes)).toFixed(2)





    return (
        <>
            <Review cost={{subtotal, shipping, taxes, total}} shippingData={shippingData}/>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment</Typography>
                <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                    <CardElement options={CARD_OPTIONS} />
                    <br/>
                    {errorMessage !== "" && 
                    <>
                        <small>The order could not be submitted due to an error:</small>
                        <br/>
                        <small style={{color:"#c00001"}}>{errorMessage}</small>
                        <br/>
                        <small>If problems persist please contact us at <b>support@darwinstees.com</b></small>
                        <br/>
                    </>}
                    
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined" disabled={backDisabled} onClick={backStep}>Back</Button>
                        <Button type="submit" variant="contained" disabled={nextDisabled} color="primary">{nextText}</Button>
                    </div>
                </form>
        </>
    )
}

export default PaymentForm
