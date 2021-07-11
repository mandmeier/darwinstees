
export const draw = (genome, component = false, INIT_X = 1800, INIT_Y = 1800) => {

    function getXOffsets(genes) {
        return [
          -genes[1],
          -genes[0],
          0,
          genes[0],
          genes[1],
          genes[2],
          0,
          -genes[2],
        ];
      }

    function getYOffsets(genes) {
    return [
        genes[5],
        genes[4],
        genes[3],
        genes[4],
        genes[5],
        genes[6],
        genes[7],
        genes[6],
    ];
    }

    const INIT_GENE_INDEX = 2;
    const GENE_MAX_INDEX = 8;
    const CANVAS_WIDTH = 3600;

    var coords = {x1s: [], x2s : [], y1s : [], y2s :[]}

    function tree(x1, y1, branchings, geneIndex, genome) {
    var x2 = x1 + branchings * getXOffsets(genome)[geneIndex] * 50;
    var y2 = y1 + branchings * getYOffsets(genome)[geneIndex] * 50;

    coords.x1s.push(x1)
    coords.x2s.push(x2)
    coords.y1s.push(y1)
    coords.y2s.push(y2)

    if (branchings > 0) {
        tree(
        x2,
        y2,
        branchings - 1,
        (geneIndex + (GENE_MAX_INDEX - 1)) % GENE_MAX_INDEX,
        genome
        );
        tree(x2, y2, branchings - 1, (geneIndex + 1) % GENE_MAX_INDEX, genome);
    }
    }

    tree(INIT_X, INIT_Y, genome[GENE_MAX_INDEX], INIT_GENE_INDEX, genome);
    




    function adjustSize(ords, shift_gene) {

        let {x1s, x2s, y1s, y2s} = ords

        let xs = [...x1s, ...x2s];
        let ys = [...y1s, ...y2s];

        // find min and max coordinates
        var minx = Math.min.apply(Math, xs);
        var maxx = Math.max.apply(Math, xs);
        var miny = Math.min.apply(Math, ys);
        var maxy = Math.max.apply(Math, ys);
        // calculate dimensions
        var xdim = maxx - minx;
        var ydim = maxy - miny;
        var maxdim = Math.max.apply(Math, [xdim, ydim]);

        // scale to fit in frame
        var squeeze_factor;
        if (maxdim > CANVAS_WIDTH*0.9) {
        squeeze_factor = (CANVAS_WIDTH*0.9) / maxdim;
        } else {
        squeeze_factor = 1;
        }
        //calculate start y position center image
        const shift_from_center = shift_gene === undefined ? 1 : `0.${shift_gene}`
        var yshift = (maxy - INIT_Y - ydim / 2) * squeeze_factor * shift_from_center;
        yshift = yshift * 0.9
        // scale coordinates
        x1s = x1s.map(coord => {
            return (coord - INIT_X) * squeeze_factor + INIT_X;
        });
        x2s = x2s.map(coord => {
            return (coord - INIT_X) * squeeze_factor + INIT_X;
        });
        y1s = y1s.map(coord => {
            return (coord - INIT_Y) * squeeze_factor + INIT_Y - yshift;
        });
        y2s = y2s.map(coord => {
            return (coord - INIT_Y) * squeeze_factor + INIT_Y - yshift;
        });

        const adjCoords = {x1s, x2s, y1s, y2s}

        return adjCoords
    }


    coords = adjustSize(coords, genome[10])
    



    function rotatePoint(x, y, cx, cy, angle ) {
        let s=Math.sin(angle)
        let c=Math.cos(angle)
        // translate point back to origin
        var px = x - cx
        var py = y - cy
        // rotate point
        let xnew = px*c - py*s
        let ynew = px*s + py*c
        // translate point back
        px = xnew + cx
        py = ynew + cy
        return {x: px, y:py}
    }
    
    function rotateCoords(ords, angle) {
        let {x1s, x2s, y1s, y2s} = ords
            var x1srot = []
            var y1srot = []
            var x2srot = []
            var y2srot = []
            for (let i = 0; i < x1s.length; i++) {
                const { x:xA, y:yA } = rotatePoint(x1s[i], y1s[i], INIT_X , INIT_Y, angle)
                x1srot.push(xA)
                y1srot.push(yA)
                const { x:xB, y:yB } = rotatePoint(x2s[i], y2s[i], INIT_X , INIT_Y, angle)
                x2srot.push(xB)
                y2srot.push(yB) 
            }
            let rotatedCoords = {x1s: x1srot, x2s: x2srot, y1s: y1srot, y2s: y2srot}
        return rotatedCoords
    }

    const n = genome[11]
    const pizza = 2*Math.PI/n
    const angles = []
    for (let i = 0; i < n; i++) {
        angles.push(i * pizza)
      }

    // add rotate all points n times and add to total coordinates

    var allCoords = {x1s: [], x2s : [], y1s : [], y2s :[]}

    angles.forEach(angle => {

        let rotatedCoords = rotateCoords(coords, angle)

        let {x1s, x2s, y1s, y2s} = rotatedCoords

        allCoords = {
            x1s: [...allCoords.x1s, ...x1s],
            x2s: [...allCoords.x2s, ...x2s],
            y1s: [...allCoords.y1s, ...y1s],
            y2s: [...allCoords.y2s, ...y2s],
        }
        

    })

    // adjust coords to fit again

    allCoords = adjustSize(allCoords)
    

    function drawEllipse(xA, yA, xB, yB) {
        const AB = Math.sqrt((xB - xA)**2 + (yB - yA)**2)
        const rx = AB/2
        const scale = Number(`0.${genome[9]}`)
        const ry = rx * scale
        const cx = (xA+xB)/2
        const cy = (yA+yB)/2
        // get rotation angle
        var theta
        if (xB >= xA && yB < yA) { // NE
            theta = (Math.asin((yB - yA) / AB))*(180/Math.PI)
        } else if (xB < xA && yB <= yA) { // NW
            theta = 180-(Math.asin((yB - yA) / AB))*(180/Math.PI)    
        } else if (xB <= xA && yB > yA) { // SW
            theta = 180-(Math.asin((yB - yA) / AB))*(180/Math.PI)
        } else { // SE
            theta = 180-(Math.asin((yA - yB) / AB))*(180/Math.PI)
        }
        const ell = `
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${isNaN(theta) ? 0 : theta} ${cx} ${cy})"/>`
        return ell
    }


    function drawEllipses(ords) {

        let {x1s, x2s, y1s, y2s} = ords

        const ellipses = []

        for (let i = 0; i < x1s.length; i++) {
            ellipses.push(drawEllipse(x1s[i], y1s[i], x2s[i], y2s[i]))
        }

        return ellipses

    }

    const svgEllipses = drawEllipses(allCoords)

    const innersvg = `<g stroke="black" stroke-width="25" fill="none">${svgEllipses.join('')}</g>`

    if (component === true) {
        return innersvg 
    } else {
        const svg = `<svg width="100%" height="100%" viewBox="0 0 3600 3600" preserveAspectRatio="xMidYMid" style="background: none;">${innersvg}</svg>`
        console.log("DRAWING MANDALAY")
        console.log(svg)
        
        
        return svg
    }

}





