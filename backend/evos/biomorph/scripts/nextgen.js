//// create next generation of evos

import fs from 'fs'
import {mutateEvo} from './mutateEvo.js';
import path from 'path'
import Evo from '../../../models/Evo.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

// try {

//         const query = new RegExp(`^${lineage}-`,"g");
//         console.log("QUERY")
//         console.log(query)

//         const winner = await Evo.find({name: query})
//                 .sort({ likes: -1 })
//                 .limit(1);

//         console.log("WINNER")
//         console.log(winner)

// } catch (error) {
//         console.log("failed to retreive winner")
// }


const winner = 1
const rawdata = fs.readFileSync(path.join(dir, 'mutants/mutants.json'));
const muts = JSON.parse(rawdata);
const parent = muts.find(mutant => mutant.name.endsWith(winner));


// add winner to evos.json
const evodir = path.join(dir, 'evos.json')
const evos = JSON.parse(fs.readFileSync(evodir))
evos.push({name: parent.name, svg: parent.svg})
fs.writeFileSync(evodir, JSON.stringify(evos))
console.log(`added next gen ${parent.name} to evos.json`)


// make mutants (next gen)
const mutants = mutateEvo(parent)



// save mutants to mongodb
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
                }
        })

})


// save to mutants.json file
const mutantData = JSON.stringify(mutants)
fs.writeFileSync(path.join(dir, 'mutants.json'), mutantData)




        




// console.log(nextGenId)





// add parent to evos.json as latest gen


// mutate parent




// mutate parent genome



// draw children
// drawEvo(winnerEvo.genome);





// draw winner and add winner to lineage






// mutate winner and add offspring to mutants, update mutants.json









// import { buildBiomorph } from './embryology.js';











// import fs from 'fs'

// const species = "biomorph"


// const testsvg = `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line></svg>`


// var num = "00001-1"
// fs.writeFileSync(`evos/biomorphs/${species}-${num}.svg`, testsvg)



// const testsvg2 = `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line></svg>`


// var num = "00002-2"
// fs.writeFileSync(`evos/biomorphs/${species}-${num}.svg`, testsvg2)



// const testsvg3 = `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line></svg>`


// var num = "00003-3"
// fs.writeFileSync(`evos/biomorphs/${species}-${num}.svg`, testsvg3)


// const testsvg4 = `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line><line x1="166" y1="160" x2="166" y2="136"></line></svg>`


// var num = "00004-1"
// fs.writeFileSync(`evos/biomorphs/${species}-${num}.svg`, testsvg4)


// const testsvg5 = `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line><line x1="166" y1="160" x2="166" y2="136"></line><line x1="166" y1="136" x2="150" y2="128"></line></svg>`


// var num = "00005-2"
// fs.writeFileSync(`evos/biomorphs/${species}-${num}.svg`, testsvg5)


// const testsvg6 = `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line><line x1="166" y1="160" x2="166" y2="136"></line><line x1="166" y1="136" x2="150" y2="128"></line><line x1="150" y1="128" x2="150" y2="124"></line></svg>`



// var num = "00006-3"
// fs.writeFileSync(`evos/biomorphs/${species}-${num}.svg`, testsvg6)


// const testsvg7 = `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line><line x1="166" y1="160" x2="166" y2="136"></line><line x1="166" y1="136" x2="150" y2="128"></line><line x1="150" y1="128" x2="150" y2="124"></line><line x1="150" y1="124" x2="150" y2="124"></line></g></svg>`


// var num = "00007-1"
// fs.writeFileSync(`evos/biomorphs/${species}-${num}.svg`, testsvg7)



// console.log(process.cwd())

//console.log('TEST')

//console.log(readMe)


// produce next generation of evos


// const testgenome = [0, 2, 4, 5, 4, 4, 1, 1, 2]




// const bm = svgBiomorph(testgenome)


// console.log(bm)


