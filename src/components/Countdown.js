import { MuiThemeProvider } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Time = styled.div`
    background-color: #333;
    color: #f9f9f9;
    font-size: 1.5rem;
    border-radius: 0.3rem;
    max-width: 8rem;
    text-align: center;
`
    

const Countdown = ({mutationDate}) => {

    const [time, setTime] = useState("")

    useEffect(() => {
        let mutationDate = new Date(" Jul 01, 2021 12:00:00 ").getTime();
        // update every sec
        let x = setInterval(function(){
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
            if (distance < 0){
                clearInterval(x)
                setTime("Mutating...")
                // play mutating animation? Winner starts jumping?
                // get new evos and update component
            }

        }, 1000)
        
    }, [])

    return (
        <Time>{time}</Time>
    )
}


export default Countdown
