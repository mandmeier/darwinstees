//import * as api from '../api';
import * as api from '../api';
import FingerprintJS from '@fingerprintjs/fingerprintjs'


export const getVisitorId = () => async dispatch => {

     // Initialize an agent at application startup.
     const fpPromise = FingerprintJS.load()

     ;(async () => {
     // Get the visitor identifier when you need it.
     const fp = await fpPromise
     const result = await fp.get()

     // This is the visitor identifier:
     const visitorId = result.visitorId
     dispatch({type: "GET_VISITOR_ID", payload: visitorId})         
     })()

    //const ipv4 = await publicIp.v4() || ""
   
}


export const addUserData = (email, visitorId) => async dispatch => {
    try {

    const customer = {
        firstName: '',
        lastName: '',
        email
    }

    const {data: customerData} = await api.addOrUpdateCustomer(customer, '', visitorId)

    const { newUser } = customerData

    dispatch({type: "SET_NEW_USER", payload: newUser}) 

        
    } catch (error) {
        console.log(error);
        console.log(error.response.data); 
    }

    

}