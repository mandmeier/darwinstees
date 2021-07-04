import mongoose from 'mongoose';


// Create Schema
const ThumbSchema = new mongoose.Schema({
    lineage: {
      type: String,
      default: 'species',
    },
    generation: {
        type: Number,
        default: 0,
      },
    svg: {
        type: String,
        default: '<svg></svg>',
      },
  });
  
const Thumb = mongoose.model('Thumb', ThumbSchema);

export default Thumb;



  
  