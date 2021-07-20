export const getFirstEvo = (lineage, draw) => {

  var start_genome

    if (lineage === "lineax") {
      start_genome = [0,1,1,1,1,1,1,1,1]
      //start_genome = [1,3,2,2,-3,3,-2,-2,3]
    } else if (lineage === "ellipticus") {
      start_genome = [0,1,1,1,1,1,1,1,1,1]
      //start_genome = [0,-2,-1,7,2,-3,4,3,4,7]
    } else if (lineage === "mandalay") {
      start_genome = [0,1,1,1,1,1,1,1,1,1,0,3]
      //start_genome = [4,-1,4,4,-2,0,5,3,3,4,2,4]
    } else {
        console.log("unknown lineage. can't proceed.")
        return {}
    }


    const firstEvo = {
        name: `${lineage}-000000-1`,
        lineage: lineage,
        generation: 0,
        genome: start_genome,
        likes: 0,
        svg: draw(start_genome)
      }

      return firstEvo
}