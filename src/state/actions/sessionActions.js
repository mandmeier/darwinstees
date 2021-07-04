//import * as api from '../api';
import publicIp from 'react-public-ip'


export const getIP = (lineage) => async dispatch => {

    console.log("public IP")
    const ipv4 = await publicIp.v4() || ""
    console.log(ipv4)
   
    dispatch({type: "GET_IP", payload: ipv4})         
     
}