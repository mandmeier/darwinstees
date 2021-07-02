import styled from 'styled-components'


export const MutantRow = styled.div`
    display: flex;
    justify-content: space-between;

    & .mutant-panel {
        margin: 5px;
    }

    & .mutant-image {
        background-color: white;
        border: 1px solid black;
        border-radius: 0.5rem;
        & .like-score{
            margin-top: -0.5rem;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            & svg {
                font-size: 1.2rem;
                margin-right: 0.2rem;
                margin-bottom: 0.2rem;
            }
        }
    }
`

export const MutantActions = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
    & svg{
        font-size: 1rem;
    }
    & button{
        cursor: pointer;
        font-size: 0.5rem;
    }
`

export const LikeButton = styled.div`
    display: flex;
    width: 100%;
    ///justify-content: space-between;
    ///align-items: center;
    padding-left: 0.5rem;

    & .like-score {
        width: 100%;
        padding-right: 2rem;
        text-align: right;
    }
/* 
    & button {
        background-color: red;
        background-color: yellow;
        position: absolute;
        right: -6px;
        bottom: 3px;
        padding-top: 2px;
        width: 2rem;
        border: none;
        border-radius: 0.5rem;
        & svg {
            color: #C00001;
            font-size: 1.5rem;
        }
    }

    & button:hover {
        cursor: pointer;
    } */
`
