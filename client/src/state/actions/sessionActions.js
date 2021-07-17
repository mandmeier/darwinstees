//import * as api from '../api';
import publicIp from 'react-public-ip'
import * as api from '../api';



export const getIP = (lineage) => async dispatch => {

    console.log("public IP")
    const ipv4 = await publicIp.v4() || ""
    console.log(ipv4)
   
    dispatch({type: "GET_IP", payload: ipv4})         
     
}


export const addUserData = (email) => async dispatch => {
    try {

    const ipv4 = await publicIp.v4() || ""

    const customer = {
        firstName: '',
        lastName: '',
        email
    }

    const {data: customerData} = await api.addOrUpdateCustomer(customer, '', ipv4)

    const { newUser } = customerData

    console.log("newUser ?")
    console.log(newUser)

    dispatch({type: "SET_NEW_USER", payload: newUser}) 

        
    } catch (error) {
        console.log(error);
        console.log(error.response.data); 
    }

    

}