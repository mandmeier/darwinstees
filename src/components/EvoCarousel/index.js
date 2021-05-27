import React from 'react'
import { Grid } from '@material-ui/core'
import EvoTee from '../EvoTee'
import useStyles from './EvoCarouselElements'
import {useState} from 'react'
import Slider from 'react-slick'
import "./EvoCarouselStyles.css"
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'



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

const EvoCarousel = () => {

    const NextArrow = ({onClick}) => {
        return(
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return(
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0)

    const slicksettings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        cenertMode: true,
        centerPadding: 0,
        initialSlide: -1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    }

    return (
        <main className="slider-main">
            <Slider {...slicksettings}>
                {
                evos.map((evo, idx) => {
                    console.log(`IDX ${idx}`)
                    console.log(`imageindex${imageIndex}`)
                    return <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <EvoTee evo={evo}/>
                    </div>
                })
                }          
            </Slider>
        </main>
    )
}

export default EvoCarousel
