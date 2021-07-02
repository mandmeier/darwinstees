import styled from 'styled-components'
import { Swiper } from 'swiper/react';


export const StyledSwiper = styled(Swiper)`
   //background-color: red;
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
`



export const Gallery = styled.div`
   display: flex;
   justify-content: space-between;
`