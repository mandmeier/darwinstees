import React from 'react'
import styled from 'styled-components'


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

`

const Introduction = () => {
    return (
        <Intro>
            <h1>Witness the Power of Evolution</h1>

            <p>Evolution by Natural Selection is a process as beautiful as it is misunderstood. At Darwin's Tees, we are committed to demonstrating how natural selection is an everyday process that can produce remarkable complexity from simple and humble beginnings, no magic involved.</p>

        </Intro>
    )
}

export default Introduction
