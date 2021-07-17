import mongoose from 'mongoose';
import Order from '../models/Order.js'
import { svg2png } from '../scripts/svg2png.js';
import { placeOrder } from './prodigi_api.js';



export const createOrder = async (req, res) => {
    try {
  
        const { orderData } = req.body;
    
        const newOrder = new Order(orderData)

        const order = await newOrder.save()// populate with design

        // draw pngs for this order
        svg2png(order)

        // place order with prodigi
        placeOrder(order)

        res.status(200).json(order._id);

    } catch (error) {
      res.status(404).json({ message: error });
    }
  };

