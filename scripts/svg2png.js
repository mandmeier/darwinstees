import sharp from 'sharp'
import fs from 'fs'
import Design from '../models/Design.js'
import { uploadFile } from '../s3.js'


export const svg2png = async (order) => {

    // get designs
    const designNames = []
    order.items.forEach(item => {
      designNames.push(item.design_name)
    })

    try {

      const designs = await Design.find({'name': { $in: designNames }});

      for (const design of designs) {
        const fname_svg = `designs/${design.name}.svg`
        const fname_png = `designs/${design.name}.png`
    
        fs.writeFileSync(fname_svg, design.svg)

        sharp(fname_svg)
            .resize(3600, 4800)
            .png()
            .toFile(`${fname_png}`)
            .then(function(info) {
                fs.unlinkSync(fname_svg) // delete svg
                const file = fs.readFileSync(fname_png)
                //save to Amazon S3
                uploadFile(file, fname_png)


            })
            .catch(function(err) {
            console.log(err)
            })
    
      }

    } catch (error) {
      console.log("converting designs to png failed")
      console.log(error)
    }

//https://coderrocketfuel.com/article/convert-svg-to-png-using-node-js-and-sharp

}
