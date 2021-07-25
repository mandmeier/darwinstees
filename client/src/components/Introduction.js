import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom'


const Intro = styled.div`
max-width: 800px;
margin: 0 auto 2rem auto;
color: #111;
background: rgba(250, 250, 255, 0.8);
padding: 1rem;
border-radius: 0.3rem;
line-height: 2rem;

@media (max-width: 850px) {
    margin: 0 1rem 2rem 1rem !important;
}

& .button-container{
    display: flex;
    justify-content: flex-end;
}

`

const Introduction = () => {
    return (
        <Intro>
            <h1>Witness the Power of Evolution</h1>

            <p>Evolution by natural selection has the potential to bring forth the most elaborate and beautiful shapes and forms. At Darwin's Tees, we demonstrate that evolution is an everyday process that can produce remarkable complexity from simple and humble beginnings, no magic involved. Our T-shirt designs are not designed at all, but living digital organisms that evolve over time.</p>

            <div className="button-container">
                <Button component={Link} to="/about">
                            Learn More
                </Button>
            </div>
        </Intro>
    )
}

export default Introduction
