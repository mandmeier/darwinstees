
import fs from 'fs'
import mongoose from 'mongoose';
import {EvoSchema} from '../models/Evo.js';

export const getEvos = async (req, res) => {
    try {
      const { lineage } = req.params;
      const evos = JSON.parse(fs.readFileSync(`evos/${lineage}/evos.json`, 'utf8'))
      res.status(200).json(evos);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };

  export const getMutants = async (req, res) => {

    try {
      const { lineage } = req.params;
      const Evo = mongoose.model(lineage, EvoSchema);
      const mutants = await Evo.find().sort({ generation: -1 }).limit(3)
      //const mutants = JSON.parse(fs.readFileSync(`evos/${lineage}/mutants.json`, 'utf8'))
      res.status(200).json(mutants);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };


  export const likeMutant = async (req,res) => {
    const { lineage, _id } = req.params;
    const Evo = mongoose.model(lineage, EvoSchema);
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send('No Evo with that id');
    const updatedMutant = await Evo.findByIdAndUpdate(
        _id,
        { $inc: { likes : 1 } },
        { new: true }
      );
    res.json(updatedMutant);

  }

//   Problem.findByIdAndUpdate(found_post[0].id,  
//     { $inc: { upvotes : 1 }, 
//       $push: { upvoters:  req.user.href }
//     }, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
// })


  // export const likeMutant = async (req, res) => {
  //   const { id: _id } = req.params;
  //   if (!mongoose.Types.ObjectId.isValid(_id))
  //     return res.status(404).send('No Evo with that id');
  
  //   const mutant = await Evo.findById(_id);
  //   const updatedMutant = await Evo.findByIdAndUpdate(
  //     _id,
  //     { karma: mutant.karma + 1 },
  //     { new: true }
  //   );
  //   res.json(updatedMutant);
  // };


  // export const createEvo = async (req, res) => {
  //   Make model for correct collection
  //   const Evo = mongoose.model(lineage, EvoSchema);
  //   const evo = req.body;
  //   const newEvo = new Evo(evo);
  //   try {
  //     await newEvo.save();
  //     res.status(201).json(newEvo);
  //   } catch (error) {
  //     res.status(409).json({ message: error });
  //   }
  // };


  // export const getEvo = async (req, res) => {
  //   try {
  //     const { id: _id } = req.params;
  //     const evo = await Evo.findById(_id);
  //     if (!mongoose.Types.ObjectId.isValid(_id))
  //       return res.status(404).send('No Evo with that id');
  //     res.status(200).json(evo);
  //   } catch (error) {
  //     res.status(404).json({ message: error });
  //   }
  // };