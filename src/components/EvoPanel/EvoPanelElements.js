import styled from 'styled-components'


export const Element = styled.div`
    & .outside-panel {
        margin: 0 auto;
        margin-top: 1rem;
        max-width: 400px;
    }
    & .mutant-title {
        margin-top: 2rem;
    }
`

export const PanelHeader = styled.div`
    margin: 0 auto;
    max-width: 400px ;

    & .stats {
        display: flex;
        justify-content: space-between;  
    & h3 {
        margin: 0;
    }
    }

`


export const Panel = styled.div`
    margin: 1rem auto;
    //background-color: #d0fffe;
    max-width: 400px ;
    border: 1px solid black;
    border-radius: 0.5rem;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    padding: 0.5rem;


    & p {
        margin: 0 0.5rem;
    }
`
