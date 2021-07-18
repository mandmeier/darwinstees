
import fs from 'fs'
import mongoose from 'mongoose';
import {EvoSchema} from '../models/Evo.js';
import Thumb from '../models/Thumb.js'


export const getThumbs = async (req, res) => {
  try {
    const thumbs = await Thumb.find();
    res.status(200).json(thumbs);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};


export const getEvos = async (req, res) => {
    try {
      const { lineage } = req.params;

      // get evoIds
      const evoIds = JSON.parse(fs.readFileSync(`evos/${lineage}/evos.json`, 'utf8'))

      // get evos from ids
      const Evo = mongoose.model(lineage, EvoSchema);
      const evos = await Evo.find({'_id': {$in: evoIds}})

      res.status(200).json(evos);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };

  export const getMutants = async (req, res) => {
    try {
      const { lineage } = req.params;

      // get mutantIds
      const mutantIds = JSON.parse(fs.readFileSync(`evos/${lineage}/mutants.json`, 'utf8'))

      // get mutants from ids
      const Evo = mongoose.model(lineage, EvoSchema);
      const mutants = await Evo.find({'_id': {$in: mutantIds}})

      res.status(200).json(mutants);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };


  export const likeMutant = async (req,res) => {
    const { lineage, _id, visitorId, isLiked } = req.body;

    const Evo = mongoose.model(lineage, EvoSchema);
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send('No Evo with that id');

    var updatedMutant

    if (isLiked) {
      updatedMutant = await Evo.findByIdAndUpdate(
        _id,
        { $pull: { likes: visitorId } },
        { new: true }
      );
    } else {
      updatedMutant = await Evo.findByIdAndUpdate(
        _id,
        { $addToSet: { likes: visitorId } },
        { new: true }
      );
    }

    res.json(updatedMutant);

  }
