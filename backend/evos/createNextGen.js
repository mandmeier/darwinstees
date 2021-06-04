//// create next generation of evos

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path'
import fs from 'fs'
import {EvoSchema} from '../models/Evo.js';
import {getFirstEvo} from './getFirstEvo.js'


// import {mutateEvo} from './mutateEvo.js';
// import {drawEvo} from './drawEvo.js';



export const createNextGen = async (lineage, mutate, draw) => {

   
    // connect to MongoDB

    dotenv.config();
    const MONGODB_URI = process.env.MONGODB_URI;

    mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    const connection = mongoose.connection;

    connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
    });


    // select lineage (cmd line argument?)
    const dir = path.join('evos', lineage)


    // Make model for correct collection

    const Evo = mongoose.model(lineage, EvoSchema);

    // get winner genome from MongoDB
    var [winner] = await Evo.find().sort({ generation: -1 }).limit(3).sort({ likes: -1 }).limit(1)

    // if starting new lineage
    if (winner === undefined) {
      console.log(`creating new lineage for ${lineage}`)
      // new evos.json file with empty array
      fs.writeFileSync(path.join(dir, "evos.json"), JSON.stringify([]))
      winner = getFirstEvo(lineage, draw)
    }


    console.log(`Winner is ${winner.name} with ${winner.likes} likes`)

    // add winner to evos.json
    const evodir = path.join(dir, 'evos.json')
    const evos = JSON.parse(fs.readFileSync(evodir))
    evos.push(winner)
    fs.writeFileSync(evodir, JSON.stringify(evos))
    console.log(`added next gen ${winner.name} to evos.json`)


    // make mutants (next gen)
    const mutants = mutate(winner)

    // save to mutants.json file
    const mutantData = JSON.stringify(mutants)
    fs.writeFileSync(path.join(dir, 'mutants.json'), mutantData)



    // save mutants to mongodb


//     const mutants = [
//         {
//             name: `${lineage}-000000-1`,
//             lineage: lineage,
//             generation: 1,
//             likes: 0,
//             genome: [2,4,3,-2,-4,-2,0,3,3,2],
//             svg: "drawEvo(start_genome)"
//         },
//         {
//             name: `${lineage}-000000-2`,
//             lineage: lineage,
//             generation: 1,
//             likes: 0,
//             genome: [2,4,4,-2,-5,-2,0,3,3,2],
//             svg: "drawEvo(start_genome)"
//         },
//         {
//             name: `${lineage}-000000-3`,
//             lineage: lineage,
//             generation: 1,
//             likes: 10,
//             genome: [2,4,4,-2,-4,-2,0,2,3,2],
//             svg: "drawEvo(start_genome)"
//         }
//     ]


    var responses = []; // count responses to track when done
    mutants.forEach(mutant => {
            var newEvo = new Evo({
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
                              console.log("All done, disconnecting MongoDB")
                              mongoose.connection.close()

                      }
                    }
            })


    })


}

