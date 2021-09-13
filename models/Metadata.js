import mongoose from 'mongoose';


// Create Schema
const MetadataSchema = new mongoose.Schema({
    lineage: {
      type: String,
      default: 'species',
    },
    thumb: {
        generation: {
            type: Number,
            default: 0,
          },
        svg: {
            type: String,
            default: '<svg></svg>',
          },
    },
    nextGenTime: {type: Date},
    img: {type: String, default: ''},
    quote: {type: String, default: ''},
    quote_by: {type: String, default: ''},
    
  });
  
const Metadata = mongoose.model('Metadata', MetadataSchema);

export default Metadata;