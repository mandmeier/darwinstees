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

      const genomes = evos.map(evo => evo.genome);

      // create design with evos and Ids

      // var draw = require('../evos/biomorph/scripts/draw.js ')

      // console.log(draw)


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