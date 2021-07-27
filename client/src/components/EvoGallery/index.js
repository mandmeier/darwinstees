import React, {useState, useLayoutEffect} from 'react'
import EvoPanel from '../EvoPanel'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import styled from 'styled-components'
import { Swiper } from 'swiper/react';
import "swiper/components/thumbs/thumbs.min.css"
import {useSelector} from 'react-redux'
import SVG from 'react-inlinesvg';






const Quote = styled.div`
        //position: absolute;
        margin: 0 auto 6rem auto;
        /* left: 0;
        right: 0;
        bottom: 0rem; */
        max-width: 600px;
        height: 1rem;
        color: #fafaff;
        padding: 0.5rem;
        text-align: center;
        & p {
            margin: 0 0 0.5rem 0;
            font-size: 1rem;
            font-style: italic;
        }
        & .author {
            width: 100%;
            text-align: center;
            padding-right: 1rem;
        }
`


const SwiperWrapper = styled.div`
    position: relative;

    & .swiper-main {
        & .swiper-slide {
            padding-top: 5rem;
            //padding-bottom: 2rem;
            //position: relative;
        }

        .swiper-button-next,
        .swiper-button-prev {
            color: rgba(255, 255, 255, 0.8);
            @media (max-width: 599px) {
                top: 31%;
            }
           
        }
     
    }

    

    & .swiper-thumbs {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        top: 1.5rem;

        @media (max-width: 599px) {
            top: 1rem;
        }

        & .swiper-wrapper{
            display: flex;
            justify-content: center;
        }

        & .swiper-slide {
            width: 3rem !important;
            margin: 0 0.5rem;
            background-color: #fafaff;
            border: 2px solid black;
            border-radius: 0.3rem;
            cursor: pointer;
        }

        & .swiper-slide-thumb-active {
            width: 3.5rem !important;
            //background-color: #eee;
            //border: 2px solid #c00001;
            box-shadow: 5px 5px 5px #888888;
        }

    }

`





SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);



const EvoGallery = ({match, metadata}) => {


    useLayoutEffect(() => {
        const urlLineage= match.params.urlLineage
        if(urlLineage !== undefined) {
            const slideIndex = metadata.findIndex(p => p.lineage === urlLineage) + 1
            const swiper = document.querySelector('.swiper-container').swiper;
            swiper.slideTo(slideIndex)
        }
    }, [metadata])

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <SwiperWrapper>
        <Swiper
        className="swiper-main"
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        
        //pagination={pagination}
        breakpoints={{
            599: {
                allowTouchMove: false,
            }

          }}
        >
            {
                metadata.map((panel) => {
                    return (
                        <SwiperSlide style={{ backgroundImage: `url(${panel.img})`, backgroundPosition:"center", backgroundSize: "cover"}} key={panel.lineage}>
                            <EvoPanel panel={panel}/>
                            <br/>
                            <br/>
                            <Quote>
                                <p>"{panel.quote}"</p>
                                <div className="author">
                                    <small><b>{panel.quote_by}</b></small>
                                </div>
                            </Quote>
                        </SwiperSlide>
                        
                    )
                })
            } 
        </Swiper>
        <Swiper className="swiper-thumbs" onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true}>
            {
                metadata.map((panel, idx) => {
                    return (
                        <SwiperSlide key={panel.lineage}>
                             <div>
                                <SVG src={panel.thumb.svg} />
                            </div>                            
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </SwiperWrapper>
    )
}

export default EvoGallery
