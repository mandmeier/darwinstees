import {drawEvo} from './drawEvo.js';

export const mutateEvo = parent => {

    const genome = parent.genome

    var max = 9;
    var min;
    var mut;
    var randGenes = Array.from(Array(9).keys())
      .sort(() => 0.5 - Math.random())
      .slice(0, 3); // create 3 mutants
  
    var mutantGenomes = randGenes.map(i => {
      if (i === 8) {
        min = 2;
      } else {
        min = -9;
      }
      // get increment
      if (genome[i] === min) {
        mut = 1;
      } else if (genome[i] === max) {
        mut = -1;
      } else {
        mut = Math.random() < 0.5 ? -1 : 1; //either or
      }
      var mutant = [...genome];
      mutant[i] = mutant[i] + mut;
      return mutant;
    });


    //create mutant id

    Number.prototype.pad = function(size) {
        var s = String(this);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    }


    const nextGenId = `${parent.id.split('-')[0]}-${(Number(parent.id.split('-')[1]) + 1).pad(6)}`

    const mutants = []

    mutantGenomes.forEach((genome, idx) => {
        mutants.push({id: `${nextGenId}-${idx+1}`, genome: genome, likes: 0, svg: drawEvo(genome) })
    })

   
    return mutants
  };