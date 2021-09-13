import React from 'react'
import {Slider} from './ImageSliderElements'
import { useSelector } from "react-redux"
import Layout1 from './Layout1'
import Layout3 from './Layout3'
import Layout7 from './Layout7'





const ImageSlider = ({lineage, layout, displayedEvos}) => {

    const evoState = useSelector((state) => state.evoState)
    var { evos } = evoState
    evos = evos[lineage]


    if (!Array.isArray(evos) || evos.length <=0) {
        return null
    }


    return (
            <Slider>
            <React.Fragment>
                {
                    [
                    layout === "1" ? <Layout1 displayedEvos={displayedEvos} key="layout_1"/>: null,
                    layout === "3" ? <Layout3 displayedEvos={displayedEvos} key="layout_3"/>: null,
                    layout === "7" ? <Layout7 displayedEvos={displayedEvos} key="layout_7"/>: null
                    ]

                }
            </React.Fragment>
                
                
            </Slider>
    )
}

export default ImageSlider
