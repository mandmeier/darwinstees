import {draw} from './draw.js'

export const mutate = parent => {

  // genes 0-7 biomorph               range -9 to 9
  // gene 8 recursion depth           range 2 to 9
  
  const genome = parent.genome

  var max = 9;
  var min;
  var mut;
  var randGenes = Array.from(Array(9).keys()) // 9 genes
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


  //create mutant name
  const nextGenNum = Number(parent.name.split('-')[1]) + 1
  const nextGenName = `${parent.lineage}-${String(nextGenNum).padStart(6, '0')}`

  const mutants = []

  mutantGenomes.forEach((genome, idx) => {
    mutants.push({name: `${nextGenName}-${idx+1}`, lineage: parent.lineage, genome: genome, svg: draw(genome) })
  })

  return mutants
};

