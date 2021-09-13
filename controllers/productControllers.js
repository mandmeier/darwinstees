import mongoose from 'mongoose';
import Product from '../models/Product.js';
import Item from '../models/Item.js';
import {drawDesign} from '../evos/drawDesign.js'
import Design from '../models/Design.js';
import {EvoSchema} from '../models/Evo.js';
import {svg2png} from '../scripts/svg2png.js'




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


export const getItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const item = await Item.findOne({itemId: itemId});

    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};


export const getOrCreateItem = async (req, res) => {
  try {

    const { itemId, lineage, generation, layout, evoIds } = req.body;

    // check if item exists already
    var item = await Item.findOne({itemId: itemId}).populate('product design')
  
    if (item === null) {
    // create item 
       
      // get product
      const productId = itemId.split("-")[0]
      //const product = await Product.findById(productId);


      // get design

      const designName = itemId.split('-').slice(1).join('-')

      var design = await Design.findOne({name: designName})
     
      if (design === null) {
        // create new design
        
        // get evos
        const Evo = mongoose.model(lineage, EvoSchema);
        const evos = await Evo.find({'_id': {$in: evoIds}})

        // arrange fetched evos in order
        const orderedEvos = evoIds.map(id => evos.filter(evo => evo._id.toString() === id)[0])
        const genomes = orderedEvos.map(evo => evo.genome)

        // create design with evos and Ids
        const svg = drawDesign(lineage, genomes, layout, generation)

        
        const designName = `${lineage}-${generation}-${layout}`

        // save new design, add to DB if does not exist already
        const designId = mongoose.Types.ObjectId();

        // save design to amazon S3

        svg2png(svg, designName)
       

        const constructedDesign = {
          _id: designId,
          name: designName,
          lineage,
          generation,
          layout,
          evoIds,
          svg,
          img_path: `https://darwinstees.s3.amazonaws.com/designs/${designName}.png`
        }

        const newDesign = new Design(constructedDesign);
        
        design = await newDesign.save()
        console.log(`savedDesign ${design.name}`)

      } else {
        console.log(`Design ${designName} fetched.`)
      }



      // construct item
      const constructedItem = {
        itemId,
        product: productId,
        design: design._id,
        qty: 1,
      }


      // save item
      const newItem = new Item(constructedItem)
      await newItem.save()
      // get saved item
      item = await Item.findOne({itemId: itemId}).populate('product design')
    } else {
      console.log(`Item ${itemId} fetched.`)
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};