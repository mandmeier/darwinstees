import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, required: true, default: "" },
    visitorIds: [String],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    }],
});

const Customer = mongoose.model('Customer', CustomerSchema);

export default Customer;
