
import fs from 'fs'
import Evo from '../models/Evo.js'

export const getEvos = async (req, res) => {
    try {
      const evos = JSON.parse(fs.readFileSync('evos/biomorph/evos.json', 'utf8'))
      res.status(200).json(evos);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };

  export const getMutants = async (req, res) => {
    try {
      const mutants = JSON.parse(fs.readFileSync('evos/biomorph/mutants.json', 'utf8'))
      res.status(200).json(mutants);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };

  export const createEvo = async (req, res) => {
    const evo = req.body;
    const newEvo = new Evo(evo);
    try {
      await newEvo.save();
      res.status(201).json(newEvo);
    } catch (error) {
      res.status(409).json({ message: error });
    }
  };


  export const getEvo = async (req, res) => {
    try {
      const { id: _id } = req.params;
      const evo = await Evo.findById(_id);
      if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No Evo with that id');
      res.status(200).json(evo);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };