import React from 'react'
import { useSelector } from "react-redux"


const Confirmation = () => {


    const shopState = useSelector((state) => state.shopState)
    const confirmationNumber = shopState.confirmationNumber


    return (
        <div>
            Confirmation Number: {confirmationNumber}
        </div>
    )
}

export default Confirmation
