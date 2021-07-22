import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Typography, Button, Divider } from '@material-ui/core'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
//import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { sendPayment } from '../../state/api'
import Review from './Review'
import { processOrder } from '../../state/actions/shopActions'
import mongoose from 'mongoose'


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
    const { cart } = shopState

    const {visitorId} = useSelector((state) => state.sessionState) 

    const [processing, setProcessing] = useState(false)

    const stripe = useStripe()
    const elements = useElements()


    const onPaymentSuccess = (paymentMethod, orderId) => {



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
            _id: orderId,
            items: orderItems,
            customer: {
                firstName: shippingData.firstName,
                lastName: shippingData.lastName,
                email: shippingData.email,
            },
            shipping: {
                firstName: shippingData.firstName,
                lastName: shippingData.lastName,
                email: shippingData.email,
                street: shippingData.address1,
                city: shippingData.city,
                postal_zip_code: shippingData.zip,
                country: shippingData.country,
                region_state:  shippingData.region,
            },
            payment: {
                subtotal: Number(subtotal),
                shipping: Number(shipping),
                taxes: Number(taxes),
                total: Number(total),
                gateway: 'stripe',
                stripe: {
                    payment_method: paymentMethod
                }
            }

        }

        dispatch(processOrder(orderData, visitorId))

        // next step go to confirmation
        nextStep()
        
    }


    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault()

        if(!stripe || !elements) return

        setProcessing(true)

        // submit order to stripe

        // create payment intent on server, get client secret

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })

        if(!error) {
            try {
                const {id} = paymentMethod
                const orderId = mongoose.Types.ObjectId()
                const customer = {
                    firstName: shippingData.firstName,
                    lastName: shippingData.lastName,
                    email: shippingData.email,
                }
                const { data } = await sendPayment(total, id, customer, orderId)

                if (data.success) {
                    onPaymentSuccess(paymentMethod, orderId)
                }
            } catch (error) {
                console.log("Error", error)
                
            }
        } else {
            console.log(error.message)
        }

        setProcessing(false)
        
    }


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
                    <br/> <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined" disabled={!stripe || processing} onClick={backStep}>Back</Button>
                        <Button type="submit" variant="contained" disabled={!stripe || processing} color="primary">{processing ? 'Processing...' : `Pay $${total}`}</Button>

                    </div>
                </form>
        </>
    )
}

export default PaymentForm
