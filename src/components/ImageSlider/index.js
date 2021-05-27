import React, {useState} from 'react'
import EvoTee from '../EvoTee'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {Slider} from './ImageSliderElements'



const evos = [
    {id: "biomorph-00001-1", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="128" x2="166" y2="160"></line>`
    },
    {id: "biomorph-00002-1", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line>`
    },
    {id: "biomorph-00003-1", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="166" y1="160" x2="166" y2="136"></line><line x1="166" y1="136" x2="150" y2="128"></line>`
    },
    {id: "biomorph-00004-2", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line><line x1="166" y1="160" x2="166" y2="136"></line><line x1="166" y1="136" x2="150" y2="128"></line><line x1="150" y1="128" x2="150" y2="124"></line><line x1="150" y1="124" x2="150" y2="124"></line></g></svg>`
    }
]


const mutants = [
    {id: "biomorph-00001-1", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="128" x2="166" y2="160"></line>`
    },
    {id: "biomorph-00002-1", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line>`
    },
    {id: "biomorph-00003-1", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="166" y1="160" x2="166" y2="136"></line><line x1="166" y1="136" x2="150" y2="128"></line>`
    },
    {id: "biomorph-00004-2", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line><line x1="166" y1="160" x2="166" y2="136"></line><line x1="166" y1="136" x2="150" y2="128"></line><line x1="150" y1="128" x2="150" y2="124"></line><line x1="150" y1="124" x2="150" y2="124"></line></g></svg>`
    }
]

const ImageSlider = () => {

    const length = evos.length

    const [current, setCurrent] = useState(length-1)


    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }


    console.log(current)

    if (!Array.isArray(evos) || evos.length <=0) {
        return null
    }

    const generation = evos[current].id.split("-")[1].replace(/^0+/, '')

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
