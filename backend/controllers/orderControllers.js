import mongoose from 'mongoose';
import Order from '../models/Order.js'
import { svg2png } from '../scripts/svg2png.js';
import { placeOrder } from './prodigi_api.js';



export const createOrder = async (req, res) => {
    try {
  
        const { orderData, customerId, orderId } = req.body;

        console.log("CREATE ORDER")

        const newOrder = new Order({
            _id: orderId,
            customer: customerId,
            items: orderData.items,
            shipping: orderData.shipping,
            payment: orderData.payment,
        })

        
        const order = await newOrder.save()

        // draw pngs for this order
        svg2png(order)

        // place order with prodigi
        placeOrder(order)

        
        res.status(200).json(order._id);



    } catch (error) {
      res.status(404).json({ message: error });
    }
  };

