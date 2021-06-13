import mongoose from 'mongoose';
import {EvoSchema} from '../models/Evo.js';
import Design from '../models/Design.js';
import {drawDesign} from '../evos/drawDesign.js'



export const createDesign = async (req, res) => {
    try {
  
      const {lineage, generation, layout, evoIds} = req.body;
    
      // fetch Evos from ids
      const Evo = mongoose.model(lineage, EvoSchema);
      const evos = await Evo.find({'_id': {$in: evoIds}})


      // get fetched evos in order
      const orderedEvos = evoIds.map(id => evos.filter(evo => evo._id.toString() === id)[0])
      const genomes = orderedEvos.map(evo => evo.genome)

      // create design with evos and Ids
      const svg = drawDesign(lineage, genomes, layout)

      const design = {
        name: `${lineage}-${generation}-${layout}`,
        lineage,
        generation,
        layout,
        evoIds,
        svg,
      }

      // save new design, add to DB if does not exist already
      //const newDesign = new Lineage(design);
      // await newDesign.save();

      res.status(201).json(design);
    } catch (error) {
      res.status(409).json({ message: error });
    }
  };