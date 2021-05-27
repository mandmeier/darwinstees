import styled from 'styled-components'


export const Slider = styled.section`
    position: relative;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    & .slider-arrow {
        position: absolute;
        top: 50%+1.5rem;
        font-size: 3rem;
        color: #000;
        z-index:10;
        cursor: pointer;
        user-select: none;
     }
     & .slider-arrow:hover {
        color: #333;
     }
     & .left-arrow {
         left: 32px;
     }
     & .right-arrow {
         right: 32px;
     }
     & .slide {
        max-width: 300px;
        height: 100%;
        /* background-color: yellow; */
        margin: 5px;
        display: none;
        opacity:0;
        transition-duration: 1s ease;
     }
     & .active {
        /* background-color: red; */
        display: inline;
        opacity:1;
        transition-duration: 1s ease;
     }
`
