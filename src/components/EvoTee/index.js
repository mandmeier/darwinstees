import React from 'react'
import SVG from 'react-inlinesvg';
import { Portrait } from './EvoTeeElements'


const EvoTee = ({evo}) => {
    return (
            <Portrait>
                <SVG src={evo.svg} />
            </Portrait>
    )
}

export default EvoTee
