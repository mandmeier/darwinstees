
import fs from 'fs'
import mongoose from 'mongoose';
import {EvoSchema} from '../models/Evo.js';
import Metadata from '../models/Metadata.js'



export const getMetadata = async (req, res) => {
    try {
      const metadata = await Metadata.find();
      res.status(200).json(metadata);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };


export const getEvos = async (req, res) => {
    try {
      const { lineage } = req.params;

      // get evoIds
      //const evoIds = JSON.parse(fs.readFileSync(`evos/${lineage}/evos.json`, 'utf8'))

      // get evos from ids
      const Evo = mongoose.model(lineage, EvoSchema);
      //const evos = await Evo.find({'_id': {$in: evoIds}})


      const allEvos = await Evo.find({})
        //console.log("ALL EVOS")
        //console.log(lineage)
        //console.log(evos)

        const latestGen = Math.max.apply(Math, allEvos.map(function(evo) { return evo.generation; }))
        const evos = allEvos.filter(evo => evo.generation < latestGen);
        const mutants = allEvos.filter(evo => evo.generation === latestGen);

        // console.log("LATEST GEN")
        // console.log(latestGen)

        // console.log("EVOS")
        // console.log(evos)
        // console.log("MUTANTS")
        // console.log(mutants)


      res.status(200).json({evos, mutants});
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
