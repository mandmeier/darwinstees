import mongoose from 'mongoose';


// Create Schema
export const EvoSchema = new mongoose.Schema({
    name: {
      type: String,
      default: 'species-000000-1',
    },
    lineage: {
      type: String,
      default: 'species',
    },
    generation: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    genome: {
      type: Array,
      default: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    likes: {
      type: Array,
      default: [],
    },
    svg: {
        type: String,
        default: '<svg></svg>',
      },
  });
  


  
  