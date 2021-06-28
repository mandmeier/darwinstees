
import {draw as drawLineax} from '../evos/lineax/scripts/draw.js'
import {draw as drawEllipticus} from '../evos/ellipticus/scripts/draw.js'
import {draw as drawMandalay} from '../evos/mandalay/scripts/draw.js'


export const drawDesign = (lineage, genomes, layout) => {

// find draw function
    var draw
    switch (lineage) {
        case "lineax":
            draw = drawLineax
            break
        case "ellipticus":
            draw = drawEllipticus
            break
        case "mandalay":
            draw = drawMandalay
            break
      default:
        draw = drawLineax
  }


// find coords

        var coordsX
        var coordsY
        var spanX
        var spanY

  switch (layout) {
    case "7":
        coordsX = [1800, 5400, 9000, 5400, 1800, 5400, 9000]
        coordsY = [1800, 3600, 5400, 7200, 9000, 10800, 12600]
        spanX = 10800
        spanY = 14400
        break
    case "3":
        coordsX = [1800, 5400, 9000]
        coordsY = [5400, 7200, 9000]
        spanX = 10800
        spanY = 14400
        break
    default:
        // coordsX = [150]
        // coordsY = [171]
        // spanX = 300
        // spanY = 342
        coordsX = [1800]
        coordsY = [2400]
        spanX = 3600
        spanY = 4800
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