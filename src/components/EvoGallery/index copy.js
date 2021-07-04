import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import EvoPanel from '../EvoPanel'
import {StyledSwiper} from './EvoGalleryElements'
//import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
//import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import styled from 'styled-components'
import SVG from 'react-inlinesvg';


//import 'swiper/css/swiper.css'
import Swiper from "react-id-swiper";
import SlideItem from "./SlideItem";
import {
  Pagination,
  Navigation,
  Lazy,
  Controller
} from "swiper";


const Quote = styled.div`
        margin: 4rem auto;
        max-width: 600px;
        background: rgba(255, 255, 255, 0.8);
        padding: 0.5rem;
        border-radius: 0.3rem;
        text-align: center;

        & p {
            margin: 0 0 0.5rem 0;
            font-style: italic;
        }
        & .author {
            width: 100%;
            text-align: center;
            padding-right: 1rem;
        }
`



const SilderWrapper = styled.div`

    .swiper-container {
    height: 40rem;
    width: 100%;

    @media screen and (max-width: 32rem) {
        height: 10rem !important;
    }
    }

    .header {
    margin-bottom: 2rem;
    }

    .swiper-slide {
    max-height: 20rem;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: center;
    font-size: 1.5rem;
    }

    .buttons-list {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    }

    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {
    opacity: 0;
    }

    .swiper-slide-auto {
    width: 100px;
    height: 100px;

    img {
        display: block;
    }

    &.swiper-slide {
        padding: 4px;
    }

    &.swiper-slide-active {
        box-shadow: inset 0 0 0 4px #000;
    }
    }

`




// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const EvoGallery = ({urlLineage}) => {



    var panels = [ 
        {
            lineage: 'lineax',
            color: "#bed7d6",
            img: `/img/reef.webp`,
            quote: 'It is not the strongest of the species that survives, not the most intelligent that survives. It is the one that is the most adaptable to change.'
        },
        {
            lineage: 'ellipticus',
            color: "#f2efdb",
            img: `/img/desert.webp`,
            quote: 'This preservation of favourable individual differences and variations, and the destruction of those which are injurious, I have called Natural Selection, or the Survival of the Fittest.'
        },
        {
            lineage: 'mandalay',
            color: "#d2debf",
            img: `/img/rainforest.webp`,
            quote: "But Natural Selection, as we shall hereafter see, is a power incessantly ready for action, and is immeasurably superior to man's feeble efforts, as the works of Nature are to those of Art."
        }
    ]

    
    const index = urlLineage !== undefined ? panels.findIndex(panel => panel.lineage === urlLineage) : 0
    panels = [...panels.slice(index), ...panels.slice(0, index)]
    
    
    // const evoState = useSelector((state) => state.evoState)
    // var {thumbs, evosLoading} = evoState
    // var thumbSvgs = []
    // useEffect(() => {
    //     const evosLoaded =  Object.values(evosLoading).every(v => v === false)
    //     if (evosLoaded) {
    //         for (let i = 0; i < panels.length ; i++) {
    //             //const thumb = thumbs[panels[i].lineage]
    //             thumbSvgs.push(thumbs[panels[i].lineage])
    //         }
    //     }
    //     console.log("EVOSSSSS")
    //     console.log(thumbSvgs[1])
    // }, [thumbs])



    // const pagination = {
    //     "clickable": true,
    //     "renderBullet": function (index, className) {
    //             return (
    //                 // `<div class="${className}">TEST</div>`
    //                 // import SVG from 'react-inlinesvg';
    //                 // <SVG src={displayedEvos[0].svg} />
    //                 `<div class="${className}">${JSON.parse(thumbSvgs[index])}</div>`
    //                 //'<span class=' + className + '>' + (index + 1) + '</span>'
    //                 )
    //           }

    // }

    // Swiper instance
    const [swiper, updateSwiper] = useState(null);
    // Swiper thumbsinstance
    const [swiperThumbs, updateSwiperThumbs] = useState(null);
    // Params definition


    
    let params = {
        modules: [Controller, Pagination, Navigation, Lazy],
        preloadImages: false,
        lazy: true,
        pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
        },
        loop: true,
        spaceBetween: 30,
        getSwiper: updateSwiper // Get swiper instance callback
    };
    let thumbsParams = {
        modules: [Controller],
        slideToClickedSlide: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        getSwiper: updateSwiperThumbs, // Get swiper instance callback
        style: {
        width: "100px"
        }
    };

    // Bind swiper and swiper thumbs
    useEffect(() => {
        if (swiper && swiperThumbs) {
        swiper.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiper;
        }
    }, [swiper, swiperThumbs]);


    return (
        <SilderWrapper>
      <Swiper {...params}>
        {panels.map((panel, idx) => (
            <SlideItem style={{ backgroundImage: `url(${panel.img})`, backgroundPosition:"center", backgroundSize: "cover"}} key={panel.lineage}>
                <EvoPanel panel={panel}/>
                {/* <Quote>
                    <p>"{panel.quote}"</p>
                    <div className="author">
                        <small><b>Charles Darwin</b></small>
                    </div>
                </Quote> */}
            </SlideItem>
        ))}
      </Swiper>

      <Swiper {...thumbsParams}>
        {panels.map((panel, idx) => (
          <SlideItem key={`slide_${idx}`} className="swiper-slide-auto">
            {/* <img
              // @note w/o unique key the image won't be updated when the image set updates.
              key={image.src}
              className="swiper-lazy"
              // @note Ignore that the images aren't matching
              src={image.src.replace("320/240", "100/100")}
            /> */}
            {`TEST ${panel.lineage}`}
          </SlideItem>
        ))}
      </Swiper>
    </SilderWrapper>
    )
}

export default EvoGallery
