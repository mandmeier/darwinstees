import styled from 'styled-components'
import tee from '../../assets/tee.png';


export const Portrait = styled.div`
    margin: 0 auto;
    background-image: url(${tee});
    background-repeat:no-repeat;
    background-position: center top;
    background-size: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    /* background-color: red; */
    & svg {
        width: 50%;
        margin: 25% auto;
        display: block;
    }



`
    