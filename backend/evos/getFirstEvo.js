export const getFirstEvo = (lineage, draw) => {

  var start_genome

    if (lineage === "biomorph") {
      start_genome = [0,1,1,1,1,1,1,1,1]
    } else if (lineage === "ellimorph") {
      start_genome = [0,1,1,1,1,1,1,1,1,1]
    } else if (lineage === "mandamorph") {
      start_genome = [0,1,1,1,1,1,1,1,1,1,0,3]
    } else {
        console.log("unknown lineage. can't proceed.")
        return {}
    }


    const firstEvo = {
        name: `${lineage}-000000-1`,
        lineage: lineage,
        generation: 1,
        likes: 0,
        genome: start_genome,
        svg: draw(start_genome)
      }

      return firstEvo
}