import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    itemId: { type: String, required: true, default: "productId-biomorph-0-1" },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    design: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Design',
        required: false
    },
    qty: { type: Number, required: true, default: 1 },
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;
