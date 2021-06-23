import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Typography, Button, Divider } from '@material-ui/core'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
//import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { sendPayment } from '../../state/api'
import Review from './Review'
import { emptyCart, processOrder } from '../../state/actions/shopActions'


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
    const cart = shopState.cart

    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState(false)

    const stripe = useStripe()
    const elements = useElements()


    const onPaymentSuccess = (paymentMethod) => {

        const orderData = {
            items: cart,
            customer: {
                firstname: shippingData.firstName,
                lastname: shippingData.lastName,
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

        dispatch(processOrder(orderData))

        // refresh cart
        dispatch(emptyCart())
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
                const { data } = await sendPayment(total, id)
                console.log("RESPONSE")
                console.log(data)

                if (data.success) {
                    //console.log("Payment successful!")
                    setSuccess(true)
                    onPaymentSuccess(paymentMethod)
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

    const shipping = subtotal >= 100 ? 0 : 6.99

    const taxes =  ((Number(subtotal) + Number(shipping)) * 0.0725).toFixed(2)

    const total = (Number(subtotal) + Number(shipping) + Number(taxes)).toFixed(2)


    return (
        <>
            <Review cost={{subtotal, shipping, taxes, total}}/>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
                <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                    <CardElement options={CARD_OPTIONS} />
                    <br/> <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined" onClick={backStep}>Back</Button>
                        <Button type="submit" variant="contained" disabled={!stripe || processing} color="primary">{processing ? 'Paying...' : `Pay $${total}`}</Button>

                    </div>
                </form>
        </>
    )
}

export default PaymentForm
