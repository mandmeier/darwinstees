import sharp from 'sharp'
import fs from 'fs'



function deleteFiles(files, callback){
    var i = files.length;
    files.forEach(function(filepath){
      fs.unlink(filepath, function(err) {
        i--;
        if (err) {
          callback(err);
          return;
        } else if (i <= 0) {
          callback(null);
        }
      });
    });
  }


export const svg2png = (order) => {

    const todelete = []
    
    order.items.forEach(item => {
        const fname_svg = `designs/${item.design.name}.svg`
        const fname_png = `designs/${item.design.name}.png`
        // double check if file already exists
        if(fs.existsSync(fname_png)){
            console.log(`${fname_png} already exists`)
        } else {
            fs.writeFileSync(fname_svg, item.design.svg)

            sharp(fname_svg)
                .resize(3600, 4800)
                //.resize(9318, 11530)
                .png()
                .toFile(`${fname_png}`)
                .catch(function(err) {
                console.log(err)
                })
    
            console.log(`wrote ${fname_png}`)
            
            todelete.push(fname_svg)
            //fs.unlinkSync(fname_svg)

        }
    });

    deleteFiles(todelete, function(err) {
        if (err) {
          console.log(err);
        }
      });

//https://coderrocketfuel.com/article/convert-svg-to-png-using-node-js-and-sharp


}
