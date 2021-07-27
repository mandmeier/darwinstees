//// create next generation of evos

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path'
import {EvoSchema} from '../models/Evo.js';
import {getFirstEvo} from './getFirstEvo.js'
import Metadata from '../models/Metadata.js';



export const createNextGen = async (lineage, mutate, draw) => {

    // connect to MongoDB

    dotenv.config()
    const MONGODB_URI = process.env.MONGODB_URI;

    const getConnection = async () => {
        try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log('Connection to DB Successful');
        } catch (err) {
        console.log('Connection to DB Failed');
        }
    };
    
    getConnection();


    // select lineage (cmd line argument?)
    const dir = path.join('evos', lineage)


    // Make model for correct collection

    const Evo = mongoose.model(lineage, EvoSchema);

    // get winner evo from MongoDB
    const threeMutants = await Evo.find().sort({ generation: -1 }).limit(3).sort({ likes: -1 })
    var winner = threeMutants[0]

    // if starting new lineage
    if (winner === undefined) {
      console.log(`creating new lineage for ${lineage}`)
    
      // create first evo
      var winner = getFirstEvo(lineage, draw)

      // save first evo to mongodb
      const _id = mongoose.Types.ObjectId();
      winner = {_id, ...winner}
      const firstEvo = new Evo(winner);
      firstEvo.save()

      // save first thumb
      const firstThumb = new Thumb({
          lineage: winner.lineage,
          generation: winner.generation,
          svg: winner.svg
      })
      firstThumb.save()

    }

    console.log(`Winner is ${winner.name} with ${winner.likes.length} likes`)


    // eliminate losers
    const loserIds = threeMutants.slice(1).map(evo => evo.id)
    await Evo.deleteMany({_id:{$in:loserIds}})

    // // add winner to thumbs, add next mutation time
    
    // update metadata: add winner to thumbs, add next mutation time 4 days later
    const currentMetadata = await Metadata.findOne({lineage: winner.lineage})
    console.log(currentMetadata)
    const newDate = new Date(new Date(currentMetadata.nextGenTime) + 60 * 60 * 4*24 * 1000);  
    const newMetadata = {...currentMetadata.toObject(), thumb: {svg: winner.svg,  generation: winner.generation}, nextGenTime: newDate}
    console.log(newMetadata)
    await Metadata.replaceOne({lineage: winner.lineage}, newMetadata)

    // make mutants (next gen)
    const mutants = mutate(winner)
   
    // save mutants to mongodb
    var responses = []; // count responses to track when done
    mutants.forEach(mutant => {
            var newEvo = new Evo({
            _id: mutant._id,
            name: mutant.name,
            lineage: mutant.lineage,
            generation: Number(mutant.name.split('-')[1]),
            genome: mutant.genome,
            svg: mutant.svg,
            });
            newEvo.save(function(err, evo) {
                    if (err) throw err;
                    if (evo) {
                            console.log(`Evo ${evo.name} added to MongoDB`)
                            responses.push(evo)
                            if(responses.length  === mutants.length) {
                              mongoose.connection.close()
                              console.log('All done! Connection to DB closed.');
                              
                      }
                    }
            })


    })


}

