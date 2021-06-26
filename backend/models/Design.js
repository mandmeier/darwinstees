import mongoose from 'mongoose';

const DesignSchema = new mongoose.Schema({

    name: {
        type: String,
        default: 'species-1-1',
      },
    lineage: {
        type: String,
        default: 'species',
    },
    generation: {
        type: Number,
        default: 1,
    },
    layout: {
        type: String,
        default: "1",
    },
    evoIds: [String],
    svg: {
        type: String,
        default: "<svg width=\"300\" height=\"300\" viewBox=\"0 0 300 300\" preserveAspectRatio=\"xMidYMid\" style=\"background: none;\">\n  <circle cx=\"150\" cy=\"150\" r=\"2\"></circle>\n</svg>",
    },
    img_path: {
        type: String,
        default: "designs/species-1-1.png"
    }
},
{
    timestamps: true,
}
);

const Design = mongoose.model('Design', DesignSchema);

export default Design;
  


  