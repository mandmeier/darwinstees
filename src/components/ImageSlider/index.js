import React, {useState} from 'react'
import EvoTee from '../EvoTee'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {Slider} from './ImageSliderElements'
import { useSelector, useDispatch } from "react-redux"
import { nextEvo, prevEvo } from '../../state/actions/evoActions';
import evolution from '../../assets/evolution.png'





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
                
            {
                evos.map((evo, idx) => {
                    return <div className={idx === current ? 'slide active' : 'slide'}>
                            
                                <EvoTee evo={evo}/>
                        
                    </div>
                })
            }   
                <div className="slider-controls">
                    <FaArrowAltCircleLeft className="slider-arrow left-arrow" onClick={prevSlide}/>
                    <img src={evolution} />
                    <FaArrowAltCircleRight className="slider-arrow right-arrow" onClick={nextSlide}/>
                </div>
                
            </Slider>
    )
}

export default ImageSlider
