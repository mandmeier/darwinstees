import styled from 'styled-components'


export const Element = styled.div`
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
    //background: rgba(255, 255, 255, .2);

    & .info {
        display: flex;
        justify-content: center;
    }

    & .panel {
        margin: 0;
        max-width: 400px ;
        //border: 1px solid black;
        padding: 0 0.5rem;

    }

    & .panel-left {
        //background-color: red;
        max-width: 350px ;
    }

    & .panel-right{
        margin-top: 8rem;
    }

    & .add-to-cart {
        margin: 1rem 0;
        display: flex;
        justify-content: center;

    }

    & .title-price{
        //display: flex;
        //justify-content: space-between;
        //align-items: flex-end;
        //margin-bottom: 2rem;
        & h2 {
            margin: 0;
            font-family: 'Miss Fajardose', cursive;
            font-size: 6rem;
        }
        & .price-tag {
            margin: 0;
            margin-top: -1rem;
        }

    }

    & .panel-transparent {
        background: rgba(255, 255, 255, 0.8);
        padding: 0.5rem;
        border-radius: 0.3rem;
    }

    & .panel-nextgen {
        margin-top: 1.5rem;
    }

    & .panel-mutants {
        margin: 2rem auto;
        max-width: 400px;
    }



    /* & .outside-panel {
        margin: 0 auto;
        margin-top: 1rem;
        max-width: 800px;
    } */
    /* & .mutant-title {
        margin-top: 2rem;
    } */
`

export const PanelHeader = styled.div`
    margin: 0 auto;
    max-width: 800px ;

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
    background-color: red;
    max-width: 400px ;
    border: 1px solid black;
    padding: 0.5rem;

/* 
    & p {
        margin: 0 0.5rem;
    } */
`


export const PanelRight = styled.div`
    margin: 1rem auto;
    background-color: yellow;
    max-width: 400px ;
    border: 1px solid black;
    padding: 0.5rem;

/* 
    & p {
        margin: 0 0.5rem;
    } */
`
