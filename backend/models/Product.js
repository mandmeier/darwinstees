import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  size: {type: String, required: false },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;