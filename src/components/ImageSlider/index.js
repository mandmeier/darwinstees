import React, {useState} from 'react'
import EvoTee from '../EvoTee'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {Slider} from './ImageSliderElements'
import { useSelector, useDispatch } from "react-redux"
import { nextEvo, prevEvo } from '../../state/actions/evoActions';





const ImageSlider = () => {

    const evoState = useSelector((state) => state.evoState)
    const {current, loading, evos} = evoState
    const generation = evos.length > 0 ? evos[current].id.split("-")[1].replace(/^0+/, '') : 0

    const dispatch = useDispatch();

    const prevSlide = () => {
        dispatch(prevEvo(current, evos.length));
    }

    const nextSlide = () => {
        dispatch(nextEvo(current, evos.length));
    }


    if (!Array.isArray(evos) || evos.length <=0) {
        return null
    }

    return (
        <Slider>
            <FaArrowAltCircleLeft className="slider-arrow left-arrow" onClick={prevSlide}/>
         {
            evos.map((evo, idx) => {
                return <div className={idx === current ? 'slide active' : 'slide'}>
                        
                            <EvoTee evo={evo}/>
                    
                </div>
            })
        }   
            <FaArrowAltCircleRight className="slider-arrow right-arrow" onClick={nextSlide}/>
        </Slider>
    )
}

export default ImageSlider
