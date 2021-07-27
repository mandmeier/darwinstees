import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Metadata from '../models/Metadata.js'


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


const winner = {
    lineage: 'lineax',
    svg: "testsvg",
    generation: 10,
}

// add winner to thumbs, add next mutation time


try {
    const currentMetadata = await Metadata.findOne({lineage: winner.lineage})
    console.log(currentMetadata)
    const newDate = new Date(new Date(currentMetadata.nextGenTime).getTime() + 60 * 60 * 3*24 * 1000);  
    const newMetadata = {...currentMetadata.toObject(), thumb: {svg: winner.svg,  generation: winner.generation}, nextGenTime: newDate}
    console.log(newMetadata)
    await Metadata.replaceOne({lineage: winner.lineage}, newMetadata)
} catch (error) {
    console.log("error")
    //console.log(error)
}






