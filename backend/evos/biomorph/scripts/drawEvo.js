
export const drawEvo = genome => {
 
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
    const CANVAS_WIDTH = 300;
    const INIT_X = 150;
    const INIT_Y = 150;

    // create svg for evos
    // calculate lines

    var x1s = [];
    var x2s = [];
    var y1s = [];
    var y2s = [];

    function tree(x1, y1, branchings, geneIndex, genome) {
    var x2 = x1 + branchings * getXOffsets(genome)[geneIndex] * 4;
    var y2 = y1 + branchings * getYOffsets(genome)[geneIndex] * 4;
    x1s = [...x1s, x1];
    y1s = [...y1s, y1];
    x2s = [...x2s, x2];
    y2s = [...y2s, y2];

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

    // adjust y coord start
    var xs = [...x1s, ...x2s];
    var ys = [...y1s, ...y2s];
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
    if (maxdim > CANVAS_WIDTH - 30) {
    squeeze_factor = (CANVAS_WIDTH - 30) / maxdim;
    } else {
    squeeze_factor = 1;
    }
    //calculate start y position center image
    var yshift = (maxy - INIT_Y - ydim / 2) * squeeze_factor;
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

    const svglines = []
    for (let i = 0; i < x1s.length; i++) {
        svglines.push(`<line x1="${x1s[i]}" y1="${y1s[i]}" x2="${x2s[i]}" y2="${y2s[i]}"/>`)
    }

    const svg = `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2">${svglines.join('')}</g></svg>`
    
    return svg;
}
