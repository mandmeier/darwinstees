import fs from 'fs'
import path from 'path'

/// write evo images as json

const indir = "evos/biomorphs"

// Make an async function that gets executed immediately

const evoJSON = []

const jsonifyEvos = async (dir) => {
    try {
        const files = await fs.promises.readdir( dir );
        for( const file of files ) {
            if(file.endsWith(".svg")) {
                //Get the full paths
                const evoPath = path.join( dir, file );
                const evoSVG = fs.readFileSync(evoPath, 'utf8')
                console.log(evoSVG);
                evoJSON.push({id: file.split(".")[0], svg: evoSVG})
            }
        }
        console.log(evoJSON)
        const data = JSON.stringify(evoJSON)
        fs.writeFileSync(path.join(dir, "evos.json"), data)
    }
    catch( e ) {
        console.error( "Error! Whoops!", e );
    }
}

jsonifyEvos(indir)

