import React from 'react'
import EvoPanel from '../EvoPanel'
import {StyledSwiper} from './EvoGalleryElements'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const EvoGallery = () => {



    const panels = [ 
        {
            lineage: 'biomorph',
            color: "#bed7d6"
        },
        {
            lineage: 'ellimorph',
            color: "#f2efdb"
        },
        {
            lineage: 'mandamorph',
            color: "#d2debf"
        }
]


    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
                return '<span class=' + className + '>' + (index + 1) + '</span>';
              }

    }

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
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 3,
                
            },

          }}
        >
            {
                    panels.map((panel) => {
                        return (
                            <SwiperSlide key={panel.lineage}>
                                <EvoPanel panel={panel}/>
                            </SwiperSlide>
                        )
                    })
            }   
        </StyledSwiper>


        // <Slider {...settings}>
        //    {
        //          lineages.map((lineage) => {
        //              return (
        //                  <div>
        //                      {/* <img width="100%" src={photo.url}/> */}
        //                       <h1 className="carousel">{lineage}</h1> 
        //                      {/* <EvoPanel lineage={lineage} key={lineage}/> */}
        //                  </div>
        //             )
        //          })
        //      }   
        // </Slider>

        // <Slider {...settings}>
        //    {photos.map(photo => {
        //        return(
        //            <div>
        //                <img width="100%" src={photo.url}/>
        //            </div>
        //        )
        //    })}

        // </Slider>
        // <Slider {...settings}>
        //     <div className = "card-wrapper">
        //         <div className = "card">
        //             <div className = "card-image">
        //                 <img src='assets/evolution.pmg'/>
        //             </div>
        //         </div>
        //     </div>

        // </Slider>
        // <Gallery>
        //      {
        //         lineages.map((lineage) => {
        //             return <EvoPanel lineage={lineage} key={lineage}/>
        //         })
        //     }   
        // </Gallery>
    )
}

export default EvoGallery
