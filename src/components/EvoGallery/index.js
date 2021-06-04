import React from 'react'
import EvoPanel from '../EvoPanel'
import {Gallery} from './EvoGalleryElements'

const EvoGallery = () => {

    const lineages = ["biomorph", 'ellimorph']

    return (
        <Gallery>
             {
                lineages.map((lineage, idx) => {
                    return <EvoPanel lineage={lineage} key={lineage}/>
                })
            }   
        </Gallery>
    )
}

export default EvoGallery
