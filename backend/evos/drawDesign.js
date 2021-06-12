
import {draw as drawBiomorph} from '../evos/biomorph/scripts/draw.js'
import {draw as drawEllimorph} from '../evos/ellimorph/scripts/draw.js'
import {draw as drawMandamorph} from '../evos/mandamorph/scripts/draw.js'


export const drawDesign = (lineage, genomes, layout) => {

// find draw function
    var draw
    switch (lineage) {
        case "biomorph":
            draw = drawBiomorph
            break
        case "ellimorph":
            draw = drawEllimorph
            break
        case "mandamorph":
            draw = drawMandamorph
            break
      default:
        draw = drawBiomorph
  }


// find coords

        var coordsX
        var coordsY
        var spanX
        var spanY

  switch (layout) {
    case "7":
        coordsX = [225, 525, 825, 525, 225, 525, 825]
        coordsY = [150, 300, 450, 600, 750, 900, 1050]
        spanX = 1050
        spanY = 1200
        break
    case "3":
        coordsX = [150, 450, 750]
        coordsY = [364, 514, 664]
        spanX = 900
        spanY = 1028
        break
    default:
        coordsX = [150]
        coordsY = [171]
        spanX = 300
        spanY = 342
}

// draw evos at coordinates

  const evoFigures = []

  genomes.forEach((genome, i) => {
      evoFigures.push(draw(genome, true, coordsX[i], coordsY[i]))
  });

  const innersvg = evoFigures.join('')

  const svg = `<svg width="100%" height="100%" viewBox="0 0 ${spanX} ${spanY}" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2">${innersvg}</g></svg>`


 return svg

}