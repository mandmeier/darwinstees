import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';

export const MUiStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  }
}));


export const Element = styled.div`
    max-width: 800px;
    margin: 0.5rem auto;
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
        max-width: 200px;
    }

    & .add-to-cart {
        margin: 1rem 0;
        display: flex;
        justify-content: center;

    }

    & .title-price{
        
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
        background: rgba(250, 250, 255, 0.8);
        padding: 0.5rem;
        border-radius: 0.3rem;
    }

    & .panel-nextgen {
        margin-top: 1.5rem;
        & .next-gen-message {
            font-size: 0.75rem;
            margin: 0.5rem auto;
            text-align: center;
        }
    }

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
