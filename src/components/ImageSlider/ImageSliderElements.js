import styled from 'styled-components'

export const Slider = styled.section` 
      position: relative;
      /* background-color: lightgreen; */
      width: 100%;
      display: flex;
      justify-content: center;
      & .slider-controls {
         /* background-color: lightsalmon; */
         position: absolute;
         bottom: 0;
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
      & .slider-arrow:hover {
         color: #666;
      }
      
      & .slide {
         /* background-color: yellow; */
         display: none;
         opacity:0;
      }
      & .active {
         /* background-color: red; */
         display: inline;
         opacity:1;
      }
   `
