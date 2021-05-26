
import fs from 'fs'

export const getEvos = async (req, res) => {
    try {
      const evos = JSON.parse(fs.readFileSync('evos/biomorphs/evos.json', 'utf8'))
  
      console.log("evos")
      console.log(evos)
  
      res.status(200).json(evos);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };