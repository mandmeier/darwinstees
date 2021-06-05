import styled from 'styled-components'



export const Panel = styled.div`
    margin: 1rem auto;
    //background-color: #d0fffe;
    max-width: 400px ;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem;

    & .evo-panel-header {
        display: flex;
        justify-content: space-between;
    }

    & p {
        margin: 0 0.5rem;
    }
`
