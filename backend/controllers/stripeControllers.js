
import Stripe from "stripe";
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const getClientSecret = async (req, res) => {
    if (req.method === "POST") {
        try {
          const { amount, id, customer, orderId} = req.body;
          // Psst. For production-ready applications we recommend not using the
          // amount directly from the client without verifying it first. This is to
          // prevent bad actors from changing the total amount on the client before
          // it gets sent to the server. A good approach is to send the quantity of
          // a uniquely identifiable product and calculate the total price server-side.
          // Then, you would only fulfill orders using the quantity you charged for.


          // create customer
    
          const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            receipt_email: "tempusproarte@gmail.com",
            description: `${customer.firstName} ${customer.lastName} | ${customer.email} | orderId ${orderId}`,
            payment_method: id,
            confirm: true,
          });
    
          res.status(200).send({
              message: "Payment successful",
              success: true
            });

        } catch (err) {
          console.log(err)
          res.status(500).send({
            message: "Payment failed",
            success: false
          });
        }
      } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
      }


}