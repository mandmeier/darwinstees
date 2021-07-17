import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'

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
    

const Countdown = ({mutationTime, lineage}) => {

    const [time, setTime] = useState("")
    const [timeup, setTimeup] = useState(false)
    const [disabled, setDisabled] = useState(false)
    //const evoState = useState((state) => state.evoState)
    

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)



    useEffect(() => {
        let mutationDate = new Date(` Jul 01, 2022 ${mutationTime} `).getTime();
        // update every sec
        setInterval(function(){
            // Get todays date and time
            let now = new Date().getTime()
            // find distance between now and count down date
            let distance = mutationDate - now

            //String(n).padStart(4, '0');

            //let days = Math.floor(distance / (1000 * 60 * 60 * 24))
            let hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')
            let minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
            let seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0')

            //setTime(hours + "h " + minutes + "m " + seconds + "s ")
            setTime(`${hours} : ${minutes} : ${seconds}`)

        }, 1000)

    }, [mutationTime])

    //if(lineage == 'lineax'){console.log(time)}
    if (time === '00 : 00 : 00'){
        setTimeout(() => {
            setTimeup(true)
            setDisabled(true)
            setTimeout(() => {
                setDisabled(false)
            }, 10000)
        }, 1000)
        // play mutating animation? Winner starts jumping?
    }



    //const dispatch = useDispatch();

    const handleClick = () => {
        window.location.reload();
    }

    return (
            <Display>
                {
                timeup
                ? <Button style={{margin: "0 auto"}} variant="contained" color="primary" disabled={disabled} onClick={() => handleClick()}>{disabled ? 'Mutating...' : 'Show Next Gen'}</Button>
                : <div className="time">{time}</div>
                }
            </Display>

    )
}


export default Countdown
