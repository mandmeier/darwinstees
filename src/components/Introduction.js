import React from 'react'
import styled from 'styled-components'


const Intro = styled.div`
max-width: 800px;
margin: 0 auto;
padding: 1rem;
color: #fafaff;
//font-size: 1.5rem;
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
