//// create next generation of evos

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path'
import fs from 'fs'
import {EvoSchema} from '../models/Evo.js';
import {getFirstEvo} from './getFirstEvo.js'
import Thumb from '../models/Thumb.js';



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

    // get winner genome from MongoDB
    var [winner] = await Evo.find().sort({ generation: -1 }).limit(3).sort({ likes: -1 }).limit(1)


    const evodir = path.join(dir, 'evos.json')
    const mutantdir = path.join(dir, 'mutants.json')

    // if starting new lineage
    if (winner === undefined) {
      console.log(`creating new lineage for ${lineage}`)

      // create new evos.json and mutants.json files
      fs.writeFileSync(evodir, JSON.stringify([]))
      fs.writeFileSync(mutantdir, JSON.stringify([]))
    
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

    console.log(`Winner is ${winner.name} with ${winner.likes} likes`)

    // add winner to evos.json
    const evoIds = JSON.parse(fs.readFileSync(evodir))
    evoIds.push(winner._id)
    fs.writeFileSync(evodir, JSON.stringify(evoIds))

    // add winner to thumbs
    await Thumb.findOneAndUpdate({lineage: winner.lineage}, {svg: winner.svg,  generation: winner.generation })

    // make mutants (next gen)
    const mutants = mutate(winner)
    let mutantIds = mutants.map(mutant => mutant._id);
    // save to mutant Ids to mutants.json file
    fs.writeFileSync(mutantdir, JSON.stringify(mutantIds))

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
