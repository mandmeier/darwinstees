
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
        width: 28.571429%;
        height: 28.571429%;
        /* background-color: blue; */
    }

    & .evo0 {
        top: 0;
        left: 7.142857%;
    }

    & .evo1 {
        top: 12.5%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }

    & .evo2 {
        top: 25%;
        right: 7.142857%;
    }

    & .evo3 {
        top: 37.5%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }

    & .evo4 {
        top: 50%;
        left: 7.142857%;
    }

    & .evo5 {
        top: 62.5%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }

    & .evo6 {
        top: 75%;
        right: 7.142857%;
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



const Layout7 = ({evos, displayedEvos, current, layout}) => {

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
                                <div className="evo-svg evo3">
                                            <SVG src={displayedEvos[3].svg} />
                                </div>
                                <div className="evo-svg evo4">
                                            <SVG src={displayedEvos[4].svg} />
                                </div>
                                <div className="evo-svg evo5">
                                            <SVG src={displayedEvos[5].svg} />
                                </div>
                                <div className="evo-svg evo6">
                                            <SVG src={displayedEvos[6].svg} />
                                </div>           
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Tshirtwrapper>
    )
}

export default Layout7