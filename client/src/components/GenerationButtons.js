import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import evolution from '../assets/evolution.png'
import { nextEvo, prevEvo } from '../state/actions/evoActions'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styled from 'styled-components'

export const Slider = styled.section` 
         //margin: 0 auto;
         width: 100%;
         display: flex;
         justify-content: left;
         align-items: center;
       

      & .slider-image{
        height: 2rem;
        margin: 0.5rem 0.5rem;
      }


      & .slider-arrow {
         font-size: 2rem;
         color: #000;
         cursor: pointer;
         user-select: none;
         flex-shrink: 0;
      }

      @media (hover: hover) {
         & .slider-arrow:hover {
         color: #666;
         }
      }
   `


const GenerationButtons = ({lineage}) => {
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
            <FaArrowAltCircleLeft className="slider-arrow left-arrow" onClick={prevSlide}/>
            <img className="slider-image" src={evolution} alt='evolution of man' loading="lazy"/>
            <FaArrowAltCircleRight className="slider-arrow right-arrow" onClick={nextSlide}/>
        </Slider>
    )
}

export default GenerationButtons
