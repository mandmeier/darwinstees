
import fs from 'fs'

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