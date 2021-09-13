
import React from 'react'
import SVG from 'react-inlinesvg';
import styled from 'styled-components'
import tee from '../../../assets/Tshirt.png';
import teeLogo from '../../../assets/tee_logo_3600x4800.svg'


const Tshirtwrapper = styled.div`
    & .tshirt {
        background-image: url(${tee});
        background-repeat:no-repeat;
        background-position: center top;
        background-size: contain;
        position: relative;
    }

    & .dummy-image {
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
        padding-bottom: calc(45% / 0.75); /* 4:3 */
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
        width: calc(100%/3);
        height: calc((100%/3)*0.75); // 0.75 * width
        /* background-color: blue; */
    }

    & .evo0 {
        top: 0;
        left: 0;
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
        right: 0;
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
        left: 0;
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
        right: 0;
    }

    & .tee-logo {
        position: relative;
        & img{
            width: 100%;
        }
        & .tee-logo-text{
            position: absolute;
            color: black;
            font-size: 8%;
            bottom: 3.2%;
            left: 53.2%;
            font-family: Arial, sans-serif;
        }
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

function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
}

const Layout7 = ({displayedEvos}) => {

    return (
        <Tshirtwrapper>
            <div className="tshirt">
                <img className="dummy-image" src={tee} alt="tshirt dummy" loading="lazy"/>
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
                                <div className="tee-logo">
                                    <img src={teeLogo} alt="Darwin's Tees Logo"/>
                                    <div className="tee-logo-text">{`${capitalize(displayedEvos[6].lineage)} # ${displayedEvos[6].generation}`}</div>
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
