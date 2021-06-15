import styled from 'styled-components'

export const Slider = styled.section` 
      position: relative;
      /* background-color: lightgreen; */
      width: 100%;
      & .slider-controls {
         margin: 0.5rem auto 0 auto;
         /* background-color: lightsalmon; */
         //position: absolute;
         //bottom: 0;
         width: 44%;
         display: flex;
         justify-content: space-around;
         
         & img {
            height: 2rem;
         }
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
