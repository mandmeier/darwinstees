import React from 'react'
import SVG from 'react-inlinesvg';
// import { SvgFrame } from './EvoTeeElements'


const EvoTee = ({evo}) => {
    return (
            <SVG src={evo.svg} />
    )
}

export default EvoTee
