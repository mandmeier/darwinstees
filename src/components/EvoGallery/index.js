import React from 'react'
import EvoPanel from '../EvoPanel'
import {Gallery} from './EvoGalleryElements'

const EvoGallery = () => {

    const lineages = ["biomorph", 'ellimorph', 'mandamorph']

    return (
        <Gallery>
             {
                lineages.map((lineage) => {
                    return <EvoPanel lineage={lineage} key={lineage}/>
                })
            }   
        </Gallery>
    )
}

export default EvoGallery
