import React, {useState, useEffect} from 'react'
import EvoPanel from '../EvoPanel'
import {StyledSwiper} from './EvoGalleryElements'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import styled from 'styled-components'
import { Swiper } from 'swiper/react';
import "swiper/components/thumbs/thumbs.min.css"
import {useSelector, useDispatch} from 'react-redux'
import SVG from 'react-inlinesvg';
import {getThumbs} from '../../state/actions/evoActions'






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


const SwiperWrapper = styled.div`

    & .swiper-main {

        padding-bottom: 50px;

        & .swiper-pagination {
            margin: 0;
            background-color: white;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & .swiper-pagination-bullet {
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            font-size: 12px;
            color: #000;
            opacity: 1;
            background: rgba(0, 0, 0, 0.2);
        }

        & .swiper-pagination-bullet-active {
            color: #fff;
            background: #007aff;
        }
    }

    & .swiper-thumbs {

        & .swiper-slide {
            width: 120px !important;
            background-color: yellow;
        }

    }

`





SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);



const EvoGallery = ({panels}) => {



    const dispatch = useDispatch();


    useEffect(() => {
        // get Thumbs
        dispatch(getThumbs());
        // add thumbs to panels
    }, []);

    const {thumbs} = useSelector((state) => state.evoState)

    panels = panels.map(panel => ({...panel, thumb: thumbs[panel.lineage]}))

    console.log("ORDERED")
    console.log(panels)


    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
                return '<span class=' + className + '>' + (index + 1) + '</span>';
              }

    }

    //const backimg = "http://localhost:5000/src/assets/Darwin.png"
    const backimg = "/img/reef.webp"
    var divStyle = {
        backgroundImage: `url(${backimg})`,
      };


    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const testvg = `<svg width="100%" height="100%" viewBox="0 0 3600 3600" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="35"><line x1="1800" y1="2205" x2="1800" y2="2205"/><line x1="1800" y1="2205" x2="1260" y2="1665"/><line x1="1260" y1="1665" x2="720" y2="2070"/><line x1="720" y1="2070" x2="360" y2="1980"/><line x1="360" y1="1980" x2="360" y2="1890"/><line x1="360" y1="1890" x2="360" y2="1890"/><line x1="360" y1="1890" x2="360" y2="1890"/><line x1="360" y1="1980" x2="180" y2="2115"/><line x1="180" y1="2115" x2="180" y2="2115"/><line x1="180" y1="2115" x2="180" y2="2115"/><line x1="720" y1="2070" x2="450" y2="1800"/><line x1="450" y1="1800" x2="270" y2="1935"/><line x1="270" y1="1935" x2="270" y2="1935"/><line x1="270" y1="1935" x2="270" y2="1935"/><line x1="450" y1="1800" x2="450" y2="1800"/><line x1="450" y1="1800" x2="450" y2="1800"/><line x1="450" y1="1800" x2="450" y2="1800"/><line x1="1260" y1="1665" x2="1260" y2="1665"/><line x1="1260" y1="1665" x2="990" y2="1395"/><line x1="990" y1="1395" x2="810" y2="1530"/><line x1="810" y1="1530" x2="810" y2="1530"/><line x1="810" y1="1530" x2="810" y2="1530"/><line x1="990" y1="1395" x2="990" y2="1395"/><line x1="990" y1="1395" x2="990" y2="1395"/><line x1="990" y1="1395" x2="990" y2="1395"/><line x1="1260" y1="1665" x2="1530" y2="1395"/><line x1="1530" y1="1395" x2="1530" y2="1395"/><line x1="1530" y1="1395" x2="1530" y2="1395"/><line x1="1530" y1="1395" x2="1530" y2="1395"/><line x1="1530" y1="1395" x2="1710" y2="1530"/><line x1="1710" y1="1530" x2="1710" y2="1530"/><line x1="1710" y1="1530" x2="1710" y2="1530"/><line x1="1800" y1="2205" x2="2340" y2="1665"/><line x1="2340" y1="1665" x2="2340" y2="1665"/><line x1="2340" y1="1665" x2="2070" y2="1395"/><line x1="2070" y1="1395" x2="1890" y2="1530"/><line x1="1890" y1="1530" x2="1890" y2="1530"/><line x1="1890" y1="1530" x2="1890" y2="1530"/><line x1="2070" y1="1395" x2="2070" y2="1395"/><line x1="2070" y1="1395" x2="2070" y2="1395"/><line x1="2070" y1="1395" x2="2070" y2="1395"/><line x1="2340" y1="1665" x2="2610" y2="1395"/><line x1="2610" y1="1395" x2="2610" y2="1395"/><line x1="2610" y1="1395" x2="2610" y2="1395"/><line x1="2610" y1="1395" x2="2610" y2="1395"/><line x1="2610" y1="1395" x2="2790" y2="1530"/><line x1="2790" y1="1530" x2="2790" y2="1530"/><line x1="2790" y1="1530" x2="2790" y2="1530"/><line x1="2340" y1="1665" x2="2880" y2="2070"/><line x1="2880" y1="2070" x2="3150" y2="1800"/><line x1="3150" y1="1800" x2="3150" y2="1800"/><line x1="3150" y1="1800" x2="3150" y2="1800"/><line x1="3150" y1="1800" x2="3150" y2="1800"/><line x1="3150" y1="1800" x2="3330" y2="1935"/><line x1="3330" y1="1935" x2="3330" y2="1935"/><line x1="3330" y1="1935" x2="3330" y2="1935"/><line x1="2880" y1="2070" x2="3240" y2="1980"/><line x1="3240" y1="1980" x2="3420" y2="2115"/><line x1="3420" y1="2115" x2="3420" y2="2115"/><line x1="3420" y1="2115" x2="3420" y2="2115"/><line x1="3240" y1="1980" x2="3240" y2="1890"/><line x1="3240" y1="1890" x2="3240" y2="1890"/><line x1="3240" y1="1890" x2="3240" y2="1890"/></g></svg>`
   

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
            400: {
                allowTouchMove: false,
            }

          }}
        >
            {
                panels.map((panel) => {
                    return (
                        <SwiperSlide style={{ backgroundImage: `url(${panel.img})`, backgroundPosition:"center", backgroundSize: "cover"}} key={panel.lineage}>
                            <EvoPanel panel={panel}/>
                            <Quote>
                                <p>"{panel.quote}"</p>
                                <div className="author">
                                    <small><b>Charles Darwin</b></small>
                                </div>
                            </Quote>
                        </SwiperSlide>
                        
                    )
                })
            }   
        </Swiper>
        <Swiper className="swiper-thumbs" onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true}>
            {
                panels.map((panel, idx) => {
                    return (
                        <SwiperSlide key={panel.lineage}>
                             <div>
                                <SVG src={panel.thumb} />
                            </div>
                            <div style={{width:"100px", backgroundColor:"#ff0000"}}>{`TEST ${idx}`}</div>
                            
                        </SwiperSlide>
                    )
                })
            }
                
        </Swiper>
        <br/><br/><br/>
            
        </SwiperWrapper>
    )
}

export default EvoGallery
