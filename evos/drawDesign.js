
import {draw as drawLineax} from '../evos/lineax/scripts/draw.js'
import {draw as drawEllipticus} from '../evos/ellipticus/scripts/draw.js'
import {draw as drawMandalay} from '../evos/mandalay/scripts/draw.js'


export const drawDesign = (lineage, genomes, layout, generation) => {

    function capitalize(word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    
    const printLineage = capitalize(lineage)

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


// find coords and logo size

        var coordsX
        var coordsY
        var spanX
        var spanY
        var logo

  switch (layout) {
    case "7":
        coordsX = [1800, 5400, 9000, 5400, 1800, 5400, 9000]
        coordsY = [1800, 3600, 5400, 7200, 9000, 10800, 12600]
        spanX = 10800
        spanY = 14400
        logo = `<svg
  width="10800"
  height="14400"
  viewBox="0 0 2857.4999 3810.0001"
  version="1.1"
  id="svg5"
  inkscape:version="1.1 (c4e8f9e, 2021-05-24)"
  sodipodi:docname="tee_logo_10800x14400.svg"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
 <sodipodi:namedview
    id="namedview7"
    pagecolor="#ffffff"
    bordercolor="#666666"
    borderopacity="1.0"
    inkscape:pageshadow="2"
    inkscape:pageopacity="0.0"
    inkscape:pagecheckerboard="0"
    inkscape:document-units="mm"
    showgrid="false"
    inkscape:snap-global="false"
    units="px"
    inkscape:zoom="0.097481181"
    inkscape:cx="7575.8212"
    inkscape:cy="13761.631"
    inkscape:window-width="1312"
    inkscape:window-height="847"
    inkscape:window-x="54"
    inkscape:window-y="25"
    inkscape:window-maximized="0"
    inkscape:current-layer="layer1" />
 <defs
    id="defs2">
   <rect
      x="1105.3894"
      y="620.24628"
      width="202.65472"
      height="644.81049"
      id="rect5075" />
 </defs>
 <g
    inkscape:label="Layer 1"
    inkscape:groupmode="layer"
    id="layer1">
   <g
      id="g8831"
      transform="matrix(1.1321535,0,0,1.1321535,915.14023,3318.0877)">
     <path
        style="fill:none;stroke:#000000;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 199.13052,299.98483 c 19.16846,3.10813 42.44944,3.18623 58.0042,35.80963"
        id="path1633"
        sodipodi:nodetypes="cc" />
     <path
        style="fill:none;stroke:#000000;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 214.79847,337.17955 c 25.44981,-6.56045 15.08985,1.82982 43.00628,-1.03441"
        id="path1633-6"
        sodipodi:nodetypes="cc" />
     <path
        style="fill:none;stroke:#000000;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 198.66193,368.9713 c 13.89086,-3.24819 40.14931,-5.54162 54.72326,-32.47513"
        id="path1633-6-5"
        sodipodi:nodetypes="cc" />
     <ellipse
        style="fill:#000000;stroke:#f00000;stroke-width:0.261224;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.0588235"
        id="path4048-5"
        cx="185.08138"
        cy="322.79175"
        rx="5.8217506"
        ry="5.7230768" />
     <path
        style="fill:#000000;stroke:#000000;stroke-width:0.809715;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
        d="m 163.80799,385.83798 c -17.68027,-0.61865 -32.21044,-1.18933 -32.28928,-1.26817 -0.27397,-0.27395 10.70163,-55.6373 11.18078,-56.39832 1.28185,-2.03589 20.64994,-24.80051 21.19944,-24.91712 0.73638,-0.15627 34.77003,-3.90366 35.44029,-3.90244 0.0402,0.0173 0.33249,0.40357 0.68367,1.23266 0.31918,0.75354 4.04212,9.03663 7.87183,18.23788 3.82971,9.20122 7.16227,17.17035 7.4057,17.70916 0.24342,0.53881 0.33827,1.07012 0.21079,1.18068 -0.12749,0.11058 -3.72121,1.19055 -7.98604,2.39991 -4.26483,1.20939 -7.80371,2.24836 -7.86417,2.30882 -0.11445,0.11445 -0.66059,32.9205 -0.67195,40.36299 l -0.006,4.25449 -1.51431,-0.0379 c -0.83287,-0.0208 -15.97998,-0.54402 -33.66025,-1.16267 z m 25.14239,-53.0309 c 4.28059,-1.60372 6.90488,-5.43882 6.90488,-10.09067 0,-3.63138 -1.49616,-6.55599 -4.48644,-8.76981 -1.9633,-1.45351 -3.97368,-1.98212 -7.04969,-1.85362 -3.08781,0.12902 -5.17192,1.00834 -7.19102,3.03403 -5.14626,5.16309 -3.78942,13.9479 2.64345,17.11481 3.02754,1.49044 6.18957,1.68518 9.17882,0.56526 z"
        id="path5630"
        sodipodi:nodetypes="sssscssssssccssssssssss" />
   </g>
   <text
      xml:space="preserve"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:69.0759px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.235486"
      x="1216.3058"
      y="3748.7683"
      id="text1266"><tspan
        sodipodi:role="line"
        id="tspan1264"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:69.0759px;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke-width:0.235486"
        x="1216.3058"
        y="3748.7683">darwinstees.com</tspan></text>
   <text
      xml:space="preserve"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:28.2222px;line-height:1.25;font-family:'Arial Unicode MS';-inkscape-font-specification:'Arial Unicode MS, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.216907"
      x="1567.9498"
      y="3795.303"
      id="text1266-5-9"><tspan
        sodipodi:role="line"
        id="tspan1264-5-3"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:28.2222px;font-family:'Arial Unicode MS';-inkscape-font-specification:'Arial Unicode MS, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke-width:0.216907"
        x="1567.9498"
        y="3795.303">${printLineage} # ${generation}</tspan></text>
   <rect
      style="fill:#000000;stroke:#333333;stroke-width:1.92549"
      id="rect22676"
      width="738.90784"
      height="1.6011212"
      x="1059.2961"
      y="3763.6135" />
 </g>
</svg>`
        break
    case "3":
        coordsX = [1800, 5400, 9000]
        coordsY = [5400, 7200, 9000]
        spanX = 10800
        spanY = 14400
        logo = `<svg
  width="10800"
  height="14400"
  viewBox="0 0 2857.4999 3810.0001"
  version="1.1"
  id="svg5"
  inkscape:version="1.1 (c4e8f9e, 2021-05-24)"
  sodipodi:docname="tee_logo_10800x14400.svg"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
 <sodipodi:namedview
    id="namedview7"
    pagecolor="#ffffff"
    bordercolor="#666666"
    borderopacity="1.0"
    inkscape:pageshadow="2"
    inkscape:pageopacity="0.0"
    inkscape:pagecheckerboard="0"
    inkscape:document-units="mm"
    showgrid="false"
    inkscape:snap-global="false"
    units="px"
    inkscape:zoom="0.097481181"
    inkscape:cx="7575.8212"
    inkscape:cy="13761.631"
    inkscape:window-width="1312"
    inkscape:window-height="847"
    inkscape:window-x="54"
    inkscape:window-y="25"
    inkscape:window-maximized="0"
    inkscape:current-layer="layer1" />
 <defs
    id="defs2">
   <rect
      x="1105.3894"
      y="620.24628"
      width="202.65472"
      height="644.81049"
      id="rect5075" />
 </defs>
 <g
    inkscape:label="Layer 1"
    inkscape:groupmode="layer"
    id="layer1">
   <g
      id="g8831"
      transform="matrix(1.1321535,0,0,1.1321535,915.14023,3318.0877)">
     <path
        style="fill:none;stroke:#000000;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 199.13052,299.98483 c 19.16846,3.10813 42.44944,3.18623 58.0042,35.80963"
        id="path1633"
        sodipodi:nodetypes="cc" />
     <path
        style="fill:none;stroke:#000000;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 214.79847,337.17955 c 25.44981,-6.56045 15.08985,1.82982 43.00628,-1.03441"
        id="path1633-6"
        sodipodi:nodetypes="cc" />
     <path
        style="fill:none;stroke:#000000;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 198.66193,368.9713 c 13.89086,-3.24819 40.14931,-5.54162 54.72326,-32.47513"
        id="path1633-6-5"
        sodipodi:nodetypes="cc" />
     <ellipse
        style="fill:#000000;stroke:#f00000;stroke-width:0.261224;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.0588235"
        id="path4048-5"
        cx="185.08138"
        cy="322.79175"
        rx="5.8217506"
        ry="5.7230768" />
     <path
        style="fill:#000000;stroke:#000000;stroke-width:0.809715;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
        d="m 163.80799,385.83798 c -17.68027,-0.61865 -32.21044,-1.18933 -32.28928,-1.26817 -0.27397,-0.27395 10.70163,-55.6373 11.18078,-56.39832 1.28185,-2.03589 20.64994,-24.80051 21.19944,-24.91712 0.73638,-0.15627 34.77003,-3.90366 35.44029,-3.90244 0.0402,0.0173 0.33249,0.40357 0.68367,1.23266 0.31918,0.75354 4.04212,9.03663 7.87183,18.23788 3.82971,9.20122 7.16227,17.17035 7.4057,17.70916 0.24342,0.53881 0.33827,1.07012 0.21079,1.18068 -0.12749,0.11058 -3.72121,1.19055 -7.98604,2.39991 -4.26483,1.20939 -7.80371,2.24836 -7.86417,2.30882 -0.11445,0.11445 -0.66059,32.9205 -0.67195,40.36299 l -0.006,4.25449 -1.51431,-0.0379 c -0.83287,-0.0208 -15.97998,-0.54402 -33.66025,-1.16267 z m 25.14239,-53.0309 c 4.28059,-1.60372 6.90488,-5.43882 6.90488,-10.09067 0,-3.63138 -1.49616,-6.55599 -4.48644,-8.76981 -1.9633,-1.45351 -3.97368,-1.98212 -7.04969,-1.85362 -3.08781,0.12902 -5.17192,1.00834 -7.19102,3.03403 -5.14626,5.16309 -3.78942,13.9479 2.64345,17.11481 3.02754,1.49044 6.18957,1.68518 9.17882,0.56526 z"
        id="path5630"
        sodipodi:nodetypes="sssscssssssccssssssssss" />
   </g>
   <text
      xml:space="preserve"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:69.0759px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.235486"
      x="1216.3058"
      y="3748.7683"
      id="text1266"><tspan
        sodipodi:role="line"
        id="tspan1264"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:69.0759px;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke-width:0.235486"
        x="1216.3058"
        y="3748.7683">darwinstees.com</tspan></text>
   <text
      xml:space="preserve"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:28.2222px;line-height:1.25;font-family:'Arial Unicode MS';-inkscape-font-specification:'Arial Unicode MS, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.216907"
      x="1567.9498"
      y="3795.303"
      id="text1266-5-9"><tspan
        sodipodi:role="line"
        id="tspan1264-5-3"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:28.2222px;font-family:'Arial Unicode MS';-inkscape-font-specification:'Arial Unicode MS, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke-width:0.216907"
        x="1567.9498"
        y="3795.303">${printLineage} # ${generation}</tspan></text>
   <rect
      style="fill:#000000;stroke:#333333;stroke-width:1.92549"
      id="rect22676"
      width="738.90784"
      height="1.6011212"
      x="1059.2961"
      y="3763.6135" />
 </g>
</svg>`
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
        logo = `<svg
        width="3600"
        height="4800"
        viewBox="0 0 952.49997 1270"
        version="1.1"
        id="svg5"
        inkscape:version="1.1 (c4e8f9e, 2021-05-24)"
        sodipodi:docname="tee_logo_3600x4800.svg"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
       <sodipodi:namedview
          id="namedview7"
          pagecolor="#ffffff"
          bordercolor="#666666"
          borderopacity="1.0"
          inkscape:pageshadow="2"
          inkscape:pageopacity="0.0"
          inkscape:pagecheckerboard="0"
          inkscape:document-units="mm"
          showgrid="false"
          inkscape:snap-global="false"
          units="px"
          inkscape:zoom="0.072318874"
          inkscape:cx="1500.2999"
          inkscape:cy="3588.2749"
          inkscape:window-width="1312"
          inkscape:window-height="847"
          inkscape:window-x="54"
          inkscape:window-y="25"
          inkscape:window-maximized="0"
          inkscape:current-layer="layer1"
          width="3600px" />
       <defs
          id="defs2">
         <rect
            x="1105.3894"
            y="620.24628"
            width="202.65472"
            height="644.81049"
            id="rect5075" />
       </defs>
       <g
          inkscape:label="Layer 1"
          inkscape:groupmode="layer"
          id="layer1">
         <g
            id="g27067"
            transform="matrix(0.33333331,0,0,0.33333326,-9.2837905e-5,3.7926861e-4)">
           <g
              id="g8831"
              transform="matrix(1.1321535,0,0,1.1321535,915.14023,3318.0877)">
             <path
                style="fill:none;stroke:#000000;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                d="m 199.13052,299.98483 c 19.16846,3.10813 42.44944,3.18623 58.0042,35.80963"
                id="path1633"
                sodipodi:nodetypes="cc" />
             <path
                style="fill:none;stroke:#000000;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                d="m 214.79847,337.17955 c 25.44981,-6.56045 15.08985,1.82982 43.00628,-1.03441"
                id="path1633-6"
                sodipodi:nodetypes="cc" />
             <path
                style="fill:none;stroke:#000000;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                d="m 198.66193,368.9713 c 13.89086,-3.24819 40.14931,-5.54162 54.72326,-32.47513"
                id="path1633-6-5"
                sodipodi:nodetypes="cc" />
             <ellipse
                style="fill:#000000;stroke:#f00000;stroke-width:0.261224;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.0588235"
                id="path4048-5"
                cx="185.08138"
                cy="322.79175"
                rx="5.8217506"
                ry="5.7230768" />
             <path
                style="fill:#000000;stroke:#000000;stroke-width:0.809715;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
                d="m 163.80799,385.83798 c -17.68027,-0.61865 -32.21044,-1.18933 -32.28928,-1.26817 -0.27397,-0.27395 10.70163,-55.6373 11.18078,-56.39832 1.28185,-2.03589 20.64994,-24.80051 21.19944,-24.91712 0.73638,-0.15627 34.77003,-3.90366 35.44029,-3.90244 0.0402,0.0173 0.33249,0.40357 0.68367,1.23266 0.31918,0.75354 4.04212,9.03663 7.87183,18.23788 3.82971,9.20122 7.16227,17.17035 7.4057,17.70916 0.24342,0.53881 0.33827,1.07012 0.21079,1.18068 -0.12749,0.11058 -3.72121,1.19055 -7.98604,2.39991 -4.26483,1.20939 -7.80371,2.24836 -7.86417,2.30882 -0.11445,0.11445 -0.66059,32.9205 -0.67195,40.36299 l -0.006,4.25449 -1.51431,-0.0379 c -0.83287,-0.0208 -15.97998,-0.54402 -33.66025,-1.16267 z m 25.14239,-53.0309 c 4.28059,-1.60372 6.90488,-5.43882 6.90488,-10.09067 0,-3.63138 -1.49616,-6.55599 -4.48644,-8.76981 -1.9633,-1.45351 -3.97368,-1.98212 -7.04969,-1.85362 -3.08781,0.12902 -5.17192,1.00834 -7.19102,3.03403 -5.14626,5.16309 -3.78942,13.9479 2.64345,17.11481 3.02754,1.49044 6.18957,1.68518 9.17882,0.56526 z"
                id="path5630"
                sodipodi:nodetypes="sssscssssssccssssssssss" />
           </g>
           <text
              xml:space="preserve"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:69.0759px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.235486"
              x="1216.3058"
              y="3748.7683"
              id="text1266"><tspan
                sodipodi:role="line"
                id="tspan1264"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:69.0759px;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke-width:0.235486"
                x="1216.3058"
                y="3748.7683">darwinstees.com</tspan></text>
           <text
              xml:space="preserve"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:28.2222px;line-height:1.25;font-family:'Arial Unicode MS';-inkscape-font-specification:'Arial Unicode MS, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.216907"
              x="1567.9498"
              y="3795.303"
              id="text1266-5-9"><tspan
                sodipodi:role="line"
                id="tspan1264-5-3"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:28.2222px;font-family:'Arial Unicode MS';-inkscape-font-specification:'Arial Unicode MS, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke-width:0.216907"
                x="1567.9498"
                y="3795.303">${printLineage} # ${generation}</tspan></text>
           <rect
              style="fill:#000000;stroke:#333333;stroke-width:1.92549"
              id="rect22676"
              width="738.90784"
              height="1.6011212"
              x="1059.2961"
              y="3763.6135" />
         </g>
       </g>
     </svg>`
}

// draw evos at coordinates

  const evoFigures = []

  genomes.forEach((genome, i) => {
      evoFigures.push(draw(genome, true, coordsX[i], coordsY[i]))
  });

  const innersvg = evoFigures.join('')

  const svg = `<svg width="100%" height="100%" viewBox="0 0 ${spanX} ${spanY}" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2">${innersvg}</g>${logo}</svg>`


 return svg

}