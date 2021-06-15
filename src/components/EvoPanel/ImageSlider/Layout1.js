
import React from 'react'
import SVG from 'react-inlinesvg';
import styled from 'styled-components'
import tee from '../../../assets/Tshirt.png';


const Tshirtwrapper = styled.div`
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
        position: absolute;
        top: 0;
        left: 0;
    }

    & .print-area-wrapper {
        margin: 12% auto 0 25%;
        width: 45%;
        padding-bottom: calc(45% / 0.875);
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
        width: 100%;
        height: 100%;
        /* background-color: blue; */
    }

    & .evo0 {
        top: 6.25%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }
`



const Layout1 = ({evos, displayedEvos, current, layout}) => {

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
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Tshirtwrapper>
    )
}

export default Layout1
