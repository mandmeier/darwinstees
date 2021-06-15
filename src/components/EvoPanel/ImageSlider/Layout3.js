
import React from 'react'
import SVG from 'react-inlinesvg';
import styled from 'styled-components'
import tee from '../../../assets/Tshirt.png';


const Tshirtwrapper = styled.div`
        /* width: 100%;
        height: 300px;
        
        background-repeat:no-repeat;
        background-position: center top;
        background-size: contain;
        margin: 1rem auto 0 auto;
        background-color: lightslategray; */
    & .tshirt {
        background-image: url(${tee});
        background-repeat:no-repeat;
        background-position: center top;
        background-size: contain;
        position: relative;
    }

    & img {
        width: 100%;
        visibility: hidden;
    }
    & .tshirt-content {
        width: 100%;
        height: 100%;
        /* background-color: yellow; */
        position: absolute;
        top: 0;
        left: 0;
    }

    & .print-area-wrapper {
        margin: 12% auto 0 25%;
        width: 45%;
        padding-bottom: calc(45% / 0.875); /* 16:9 */
        position: relative;
        /* background: yellow; */
    }

    & .print-area {
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;

        color: white;
        font-size: 24px;
        text-align: center;
    }

    & .svg-container {
        width: 100%;
        height: 100%;
        position: relative
    }

    & .evo-svg{
        position: absolute;
        width: 33%;
        height: 33%;
        /* background-color: blue; */
    }

    & .evo0 {
        top: 20.81712062%;
        left: 0;
    }

    & .evo1 {
        top: 35.40856031%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }

    & .evo2 {
        top: 49.7081721%;
        right: 0;
    }



    /* & .print-area-wrapper {
        margin: 0 auto 0 auto;
        width: 50%;
        padding-bottom: 75%;
        background-color: red;


        box-sizing: border-box;
        resize: horizontal;
        border: 1px dashed;
        overflow: auto;
        max-width: 100%;

    }
    & .print-area {
    margin: 0 auto 0 auto;
    width: 100%;

    padding-bottom: 50%;

    display: flex;
    align-items: center;
    background-color: yellow;
    }
   
    & svg {
        width: 50%;
        margin: 25% auto;
    } */

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



const Layout3 = ({evos, displayedEvos, current, layout}) => {

    console.log("displayedEvos")
    console.log(displayedEvos)

    // const activeSlides = Array.from(new Array(Number(layout)), (x, i) => i + current);
    // console.log(activeSlides)



    /// get displayed evos depending on layout

    // const Indices = Array.from({length:  Number(layout)}, (x, i) => i);
    // const extendedIndices =[...Indices, ...Indices]

    // console.log("extendedIndices")
    // console.log(extendedIndices)

    // const extendedEvos = [...evos, ...evos.slice(0, Number(layout))]
    // const idx = evos.length-generation
    // var displayedEvos = extendedEvos.slice(idx-1 , idx-1 + Number(layout)).reverse()



    return (
        <Tshirtwrapper>
            <div className="tshirt">
                <img src={tee}/>
                <div className="tshirt-content">
                    <div className="print-area-wrapper">
                        <div className="print-area">
                            <div className="svg-container">
                                <div className="evo-svg evo0">
                                            <SVG src={displayedEvos[0].svg} />
                                </div>
                                <div className="evo-svg evo1">
                                            <SVG src={displayedEvos[1].svg} />
                                </div>
                                <div className="evo-svg evo2">
                                            <SVG src={displayedEvos[2].svg} />
                                </div>
                                           
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="print-area-wrapper">
                <div className="print-area">
                {
                            evos.map((evo, idx) => {
                                return <div className={displayedEvos.includes(evo) ? 'slide active' : 'slide'} key={idx}>

                                    <div className="svg-container">
                                        <SVG src={evo.svg} />
                                    </div>

                                </div>
                            })
                        }
                </div>
            </div> */}
        </Tshirtwrapper>
    )
}

export default Layout3
