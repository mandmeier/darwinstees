import styled from 'styled-components'

export const Slider = styled.section` 
      position: relative;
      /* background-color: lightgreen; */
      width: 100%;
      & .slider-controls {
         background: rgba(255, 255, 255, .8);
         margin: 0.5rem auto 0 auto;
         /* background-color: lightsalmon; */
         //position: absolute;
         //bottom: 0;
         width: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
         
         & img {
            height: 2rem;
            margin: 0.5rem 0.5rem;
         }
      }
      & .slider-arrow {
         //margin: 0.5rem 0.5rem;
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
