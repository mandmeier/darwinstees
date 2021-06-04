import React from 'react'
import EvoTee from '../EvoTee'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {Slider} from './ImageSliderElements'
import { useSelector, useDispatch } from "react-redux"
import { nextEvo, prevEvo } from '../../state/actions/evoActions';
import evolution from '../../assets/evolution.png'





const ImageSlider = ({lineage}) => {

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
                
            {
                evos.map((evo, idx) => {
                    return <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
                            
                                <EvoTee evo={evo}/>
                        
                    </div>
                })
            }   
                <div className="slider-controls">
                    <FaArrowAltCircleLeft className="slider-arrow left-arrow" onClick={prevSlide}/>
                    <img src={evolution} alt='evolution of man'/>
                    <FaArrowAltCircleRight className="slider-arrow right-arrow" onClick={nextSlide}/>
                </div>
                
            </Slider>
    )
}

export default ImageSlider
