import styled from 'styled-components'


export const MutantRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0.25rem;
    //margin-top: -0.25rem;

    & .mutant-panel {
        //margin: 0.3rem;
    }

    & .like-button {
        //background: rgba(255, 255, 255, 0.8);
        background-color: #fafaff;
        border: 1px solid black;
        border: none;
        border-radius: 0.5rem;
        padding: 0;
        cursor: pointer;
        margin: 0.5rem 0.3rem;

        & .like-button-content{
            margin-top: -0.5rem;
            padding: 0 0.5rem 0.2rem 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            & p {
                margin: 0;
            }
        }
    }
`


