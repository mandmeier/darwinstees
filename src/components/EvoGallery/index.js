import React from 'react'
import EvoPanel from '../EvoPanel'
import {StyledSwiper} from './EvoGalleryElements'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import styled from 'styled-components'


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


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const EvoGallery = () => {



    const panels = [ 
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
            
            //img: "/img/desert.webp"
        },
        {
            lineage: 'mandalay',
            color: "#d2debf",
            img: `/img/rainforest.webp`,
            quote: "But Natural Selection, as we shall hereafter see, is a power incessantly ready for action, and is immeasurably superior to man's feeble efforts, as the works of Nature are to those of Art."

            //img: "/img/rainforest.webp"
        }
]


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

    console.log(process.env.PUBLIC_URL)
    //console.log(process.env.REACT_APP_PWINTY_API_KEY)

   
    //no-repeat center center fixed`, backgroundSize: "cover"

    return (
        <StyledSwiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        
        pagination={pagination}
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
        </StyledSwiper>

    )
}

export default EvoGallery
