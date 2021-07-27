import React from 'react'
import { useSelector } from "react-redux"
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import Countdown, { zeroPad } from 'react-countdown';

export const Display = styled.div`
    margin: 0 auto;


    & .time {
        background-color: #333;
        color: #f9f9f9;
        font-size: 1.5rem;
        border-radius: 0.3rem;
        width: 9rem;
        text-align: center;
    }
    
`

const Timer = ({lineage}) => {

    const evoState = useSelector((state) => state.evoState)
    var {metadata} = evoState
    const evo_data = metadata.find(m => m.lineage === lineage)    

    const handleClick = () => {
        window.location.reload();
    }

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Button style={{margin: "0.5 auto 0 auto"}} variant="text" size="smamediumll"  onClick={() => handleClick()}>Show Next Gen</Button>
    } else {
        return (
            <div className="time">
                <span>{days}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>
            </div>
        )
    }
    };

    return (
            <Display>
                <Countdown date={evo_data.nextGenTime} renderer={renderer}/>
            </Display>

    )
}


export default Timer
