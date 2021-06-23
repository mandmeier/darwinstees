import React from 'react'
import EvoTee from '../../EvoTee'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {Slider} from './ImageSliderElements'
import { useSelector, useDispatch } from "react-redux"
import { nextEvo, prevEvo } from '../../../state/actions/evoActions';
import evolution from '../../../assets/evolution.png'
import Layout1 from './Layout1'
import Layout3 from './Layout3'
import Layout7 from './Layout7'





const ImageSlider = ({lineage, layout, displayedEvos}) => {

    const evoState = useSelector((state) => state.evoState)
    var {current, evos} = evoState
    current = current[lineage]
    evos = evos[lineage]

    const dispatch = useDispatch();

    const prevSlide = () => {
        dispatch(prevEvo(lineage, current, evos.length));
    }

    const nextSlide = () => {
        dispatch(nextEvo(lineage, current, evos.length));
    }


    if (!Array.isArray(evos) || evos.length <=0) {
        return null
    }


    return (
            <Slider>

            <React.Fragment>
                {
                    [
                    layout === "1" ? <Layout1 evos={evos} current={current} layout={layout} displayedEvos={displayedEvos}/>: null,
                    layout === "3" ? <Layout3 evos={evos} current={current} layout={layout} displayedEvos={displayedEvos}/>: null,
                    layout === "7" ? <Layout7 evos={evos} current={current} layout={layout} displayedEvos={displayedEvos}/>: null
                    ]

                }
            </React.Fragment>
                

                <div className="slider-controls">
                    <FaArrowAltCircleLeft className="slider-arrow left-arrow" onClick={prevSlide}/>
                    <img src={evolution} alt='evolution of man'/>
                    <FaArrowAltCircleRight className="slider-arrow right-arrow" onClick={nextSlide}/>
                </div>
                
            </Slider>
    )
}

export default ImageSlider