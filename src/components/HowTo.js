import React from 'react'
import styled from 'styled-components'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


const How = styled.div`
max-width: 800px;
margin: 0 auto;
padding: 1rem;
color: #fafaff;
//font-size: 1.5rem;
`

const HowTo = () => {
    return (
        <How>
            <h2>How it works</h2>
                
            <p>The T-shirt designs you find here are generated through <strong><em>evolutionary algorithms</em></strong>. Each design will evolve over time and give rise to unique and previously unimagined shapes and forms through a simple two-step evolutionary process: </p>

            <p>The first step is <strong><em>variation</em></strong>: Each motive here produces a "litter" of three offspring, each one is a mutant that is similar to its parent, but not identical.</p>

            <p>The second step is <strong><em>selection</em></strong>: The mutant designs "feed" on your Likes <ThumbUpAltIcon/> and affection, and whichever one manages to garner the most attention in the vast wilderness of the internet will reproduce and give rise to the next generation.</p>

            <p>The result of this is an evolutionary lineage of ever changing "living" designs. Choose your favorites now and become a proud wearer of a momentary snapshot of evolutionary history.</p>

        </How>
    )
}

export default HowTo
