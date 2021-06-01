//// create next generation of evos

import fs from 'fs'
import {mutateEvo} from './mutateEvo.js';
import path from 'path'
import Evo from '../../../models/Evo.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {drawEvo} from './drawEvo.js';

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
const lineage = "biomorph"
const dir = path.join('evos', lineage)

// get winner genome from MongoDB
const query = new RegExp(`^${lineage}-`,"g");
var [winner] = await Evo.find({name: query}).sort({ generation: -1 }).limit(3).sort({ likes: -1 }).limit(1)


// if starting new lineage
if (winner === undefined) {
  console.log(`creating new lineage for ${lineage}`)
  const start_genome = [0,1,1,1,1,1,1,1,1]
  winner = {
    name: `${lineage}-000000-1`,
    lineage: lineage,
    generation: 1,
    likes: 0,
    genome: start_genome,
    svg: drawEvo(start_genome)
  }

  const firstEvo = JSON.stringify([winner])
  fs.writeFileSync(path.join(dir, "evos.json"), firstEvo)
}

console.log(`Winner is ${winner.name} with ${winner.likes} likes`)

// add winner to evos.json
const evodir = path.join(dir, 'evos.json')
const evos = JSON.parse(fs.readFileSync(evodir))
evos.push({name: winner.name, svg: winner.svg})
fs.writeFileSync(evodir, JSON.stringify(evos))
console.log(`added next gen ${winner.name} to evos.json`)


// make mutants (next gen)
const mutants = mutateEvo(winner)

// save to mutants.json file
const mutantData = JSON.stringify(mutants)
fs.writeFileSync(path.join(dir, 'mutants.json'), mutantData)



// save mutants to mongodb

var responses = []; // count responses to track when done

mutants.forEach(mutant => {
        var newEvo = new Evo({
        name: mutant.name,
        lineage: mutant.name.split('-')[0],
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


