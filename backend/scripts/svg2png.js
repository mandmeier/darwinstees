import sharp from 'sharp'
import fs from 'fs'
import Design from '../models/Design.js'


export const svg2png = async (order) => {

    // get designs

    const designNames = []
    order.items.forEach(item => {
      designNames.push(item.design_name)
    })

    try {

      const designs = await Design.find({'name': { $in: designNames }});

        
      designs.forEach(design => {
          const fname_svg = `designs/${design.name}.svg`
          const fname_png = `designs/${design.name}.png`
          // double check if file already exists
          if(fs.existsSync(fname_png)){
              console.log(`${fname_png} already exists`)
          } else {
              fs.writeFileSync(fname_svg, design.svg)
  
              sharp(fname_svg)
                  .resize(3600, 4800)
                  .png()
                  .toFile(`${fname_png}`)
                  .then(function(info) {
                    fs.unlinkSync(fname_svg) // delete svg
                  })
                  .catch(function(err) {
                  console.log(err)
                  })
      
              console.log(`wrote ${fname_png}`)
          }
      });
      
    } catch (error) {
      console.log("converting designs to png failed")
      console.log(error)
    }

//https://coderrocketfuel.com/article/convert-svg-to-png-using-node-js-and-sharp

}
