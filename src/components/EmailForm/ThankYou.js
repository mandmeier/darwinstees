import React from 'react'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { useSelector } from "react-redux"

const ThankYou = () => {

    

    const sessionState = useSelector((state) => state.sessionState)
    const {newUser} = sessionState
    


    return (
        
        <div>
            {newUser !== "loading"
            &&
            <>
                {newUser == true
                ?
                    <p>Thanks for signing up!</p> 
                :
                    <p>You are already registered. Welcome back!</p>
                }
                <SentimentVerySatisfiedIcon/>
            </>
            }
        </div>
    )
}

export default ThankYou
