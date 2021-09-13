import sharp from 'sharp'
import fs from 'fs'
import { uploadFile } from '../s3.js'


export const svg2png = async (svg, designName) => {

    try {

        const fname_svg = `designs/${designName}.svg`
        const fname_png = `designs/${designName}.png`
    
        fs.writeFileSync(fname_svg, svg)

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

    } catch (error) {
      console.log(`converting design ${designName} to png failed`)
      console.log(error)
    }

//https://coderrocketfuel.com/article/convert-svg-to-png-using-node-js-and-sharp

}
