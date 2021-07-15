import mongoose from 'mongoose';
import Customer from '../models/Customer.js'

export const addOrUpdateCustomer = async (req, res) => {
    try {
  
    const { customerData, orderId, ipv4} = req.body;
    const { firstName, lastName, email } = customerData

    console.log("RECEIVED DATA")
    console.log(customerData)
    console.log(orderId)
    console.log(ipv4)
    
    var newUser
    // check if customer exists already
    var customer = await Customer.findOne({email: email}, )

    if (customer === null) {
        newUser = true
        console.log(`Creating new customer ${email}`)
        // create customer 
        // construct customer
        const newCustomer = new Customer({
            _id: mongoose.Types.ObjectId(),
            firstName,
            lastName,
            email,
            orders: orderId === '' ? [] : [orderId]
        })
        
        await newCustomer.save()

        // get saved customer
        customer = await Customer.findOne({email: email})
       

        if(firstName === '' &&  lastName === '') {
            res.status(200).json({newUser});
        } else {
            res.status(200).json({customerId: customer._id, orderId, newUser});
        }


    } else {
        newUser = false
        // update customer, add new order id
        console.log(`Updating customer ${email}`)

        const existingCustomer = await Customer.findOne({email: email})
        const uniqueIPs = [...new Set([...existingCustomer.ipAddresses, ipv4])];

        // only update IP if names are empty (e.g. when signing up for newsletter with email only)
        if(firstName === '' &&  lastName === '') {
            let set = {ipAddresses: uniqueIPs}
            customer = await Customer.findOneAndUpdate({email: email}, {$set: set}, {new: true} );
            res.status(200).json({newUser});
        } else {
            console.log("ADD NAMES")
            console.log(firstName)
            console.log(lastName)
            const newOrders = [...customer.orders, orderId]
            let set = {orders: newOrders, firstName, lastName, ipAddresses: uniqueIPs }
            customer = await Customer.findOneAndUpdate({email: email}, {$set: set}, {new: true} );
            res.status(200).json({customerId: customer._id, orderId, newUser});
        }

        
        //const set = firstName === '' &&  lastName === ''? {orders: newOrders, firstName, lastName, ipAddresses: uniqueIPs } : {ipAddresses: uniqueIPs}
        
        
    }

    //res.status(200).json({customerId: customer._id, orderId, newUser});

    } catch (error) {
        console.log(error)
      res.status(404).json({ message: error });
    }
  };