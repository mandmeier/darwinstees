import mongoose from 'mongoose';
import Customer from '../models/Customer.js'



export const addOrUpdateCustomer = async (req, res) => {
    try {
  
    const { customerData, orderId } = req.body;
    const { firstName, lastName, email } = customerData
    
    // check if customer exists already
    var customer = await Customer.findOne({email: email}, )

    if (customer === null) {
        console.log(`Creating new customer ${email}`)
        // create customer 
        // construct customer
        const newCustomer = new Customer({
            _id: mongoose.Types.ObjectId(),
            firstName,
            lastName,
            email,
            orders: [orderId]
        })
        
        await newCustomer.save()

        // get saved customer
        customer = await Customer.findOne({email: email})

    } else {
        // update customer, add new order id
        console.log(`Updating customer ${email}`)
        const newOrders = [...customer.orders, orderId]
        customer = await Customer.findOneAndUpdate({email: email}, {$set:{orders: newOrders }}, {new: true} );
        
    }

    res.status(200).json({customerId: customer._id, orderId});

    } catch (error) {
        console.log(error)
      res.status(404).json({ message: error });
    }
  };