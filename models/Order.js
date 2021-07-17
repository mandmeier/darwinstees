import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    items: [{ type: Object, required: true, default: {} }],
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Design',
        required: false
    },
    shipping: { type: Object, required: true, default: {} },
    payment: { type: Object, required: true, default: {} },
    fulfilled: { type: Boolean, required: true, default: false }
    // payment: {
    //     gateway: { type: String, required: true, default: "stripe" },
    //     stripe: {
    //         payment_method_id: { type: String, required: true, default: "" }
    //     },
    //     subtotal: { type: Number, required: true, default: 0 },
    //     shipping: { type: Number, required: true, default: 0 },
    //     taxes: { type: Number, required: true, default: 0 },
    //     total: { type: Number, required: true, default: 0 },
    // },
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;
