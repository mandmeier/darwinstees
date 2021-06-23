import mongoose from 'mongoose';
import Order from '../models/Order.js'

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

        console.log("NEW ORDER")
        console.log(newOrder)
        
        const order = await newOrder.save()

        
    res.status(200).json(order._id);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };