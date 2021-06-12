import mongoose from 'mongoose';
import Product from '../models/Product.js';

export const getProduct = async (req, res) => {
    try {
      const { _id } = req.params;
      const product = await Product.findById(_id);
      if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No Product with that id');
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error });
    }
};