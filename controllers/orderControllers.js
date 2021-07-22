//import mongoose from 'mongoose';
import Order from '../models/Order.js'
//import { svg2png } from '../scripts/svg2png.js';
import { placeOrder } from './printful_api.js';



export const createOrder = async (req, res) => {
    try {
  
        const { orderData } = req.body;
    
        const newOrder = new Order(orderData)

        const order = await newOrder.save()// populate with design

        // draw pngs for this order
        //await svg2png(order)

        // place order with printful
        const response = await placeOrder(order)

        if ('error' in response){
            //console.log("THERE WAS AN ERROR")
            //console.log(response.error.response.data.error.message)
            res.status(400).json({ confirmationNumber: "", success: false, message: response.error.response.data.error.message });


            //order._id
            // delete order from Mongo

            // undo Stripe payment

        } else {
            res.status(200).json({confirmationNumber: order._id, success: true, message: "success"});
        }

    } catch (error) {
      res.status(404).json({ message: error });
    }
  };

