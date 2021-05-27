import React from 'react'
import SVG from 'react-inlinesvg';
import { SvgFrame } from './EvoTeeElements'


const EvoTee = ({evo}) => {
    return (
        <SvgFrame>
            <SVG src={evo.svg} />
        </SvgFrame>
    )
}

export default EvoTee
