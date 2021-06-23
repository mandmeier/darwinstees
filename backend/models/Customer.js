import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    firstName: { type: String, required: true, default: "" },
    lastName: { type: String, required: true, default: "" },
    email: { type: String, required: true, default: "" },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    }],
});

const Customer = mongoose.model('Customer', CustomerSchema);

export default Customer;
