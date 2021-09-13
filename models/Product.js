import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  size: {type: String, required: false },
  sku: {type: String, default: "CA1-A-UT-GLD5000"},
  attributes: {type: Object, default: { color: "white", size: "s" }},
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;