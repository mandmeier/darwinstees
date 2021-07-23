
import Stripe from "stripe";
import dotenv from "dotenv";
import {cancelPrintOrder} from "./orderControllers.js"

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const getClientSecret = async (req, res) => {

    const { id, orderId, orderData} = req.body;

    try {

        console.log("STRIPE PAYMENT")

        console.log(orderId)

        console.log(orderData)

        const subtotal = Object.values(orderData.items).reduce((t, {product, qty}) => t + Number(product.price)*qty, 0).toFixed(2);
        const shipping = subtotal >= 50 ? 0 : 5.99
        const taxes =  ((Number(subtotal) + Number(shipping)) * 0.0725).toFixed(2)
        const total = (Number(subtotal) + Number(shipping) + Number(taxes)).toFixed(2)
        const amount = (total * 100).toFixed(0)

        // Psst. For production-ready applications we recommend not using the
        // amount directly from the client without verifying it first. This is to
        // prevent bad actors from changing the total amount on the client before
        // it gets sent to the server. A good approach is to send the quantity of
        // a uniquely identifiable product and calculate the total price server-side.
        // Then, you would only fulfill orders using the quantity you charged for.


        // create payment intent

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            receipt_email: "tempusproarte@gmail.com",
            description: `PF${orderId} | ${orderData.shipping.firstName} ${orderData.shipping.lastName} | ${orderData.shipping.email}`,
            payment_method: id,
            confirm: true,
        });

        console.log("PAYMENTINTENT")
        res.status(200).json({ message: "success"})
    } catch (error) {
        // cancel Printful order
        console.log("PAYMENT ERROR")
        cancelPrintOrder(orderId)
        res.status(error.raw.statusCode).json({ message: error.raw.message })
    }
    

}