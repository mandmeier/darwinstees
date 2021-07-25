import React from 'react'
import styled from 'styled-components'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


const How = styled.div`
max-width: 800px;
margin: 0 auto;
color: #111;
margin-top: 2rem !important;
background: rgba(250, 250, 255, 0.8);
padding: 1rem;
padding-top: 0.1rem;
border-radius: 0.3rem;
line-height: 2rem;

@media (max-width: 850px) {
    margin: 0 1rem;
}

& .emph {
        color: #111;
        font-weight: bold;
        font-size: 1.5rem;
    }


& ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
    counter-reset: apples;

    & li {
        text-indent: -4rem; 
        margin-left: 4rem;
        padding: 1rem 0.5rem;
    }

    & li:before {
        content: counter(apples);
        counter-increment: apples;
        /* color: pink;
        font-weight: bold;
        font-size: 2rem;
        margin-right: 1rem; */
        text-indent: 0; 
        margin-left: 0; 
        font-size: 2rem;
        margin-right: 1rem;
        font-weight: bold;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        width: 3rem;
        height: 3rem;
        border: 1px solid #111;
        border-radius: 50%;
        background-color: #fafaff;
        color: #333;
    }

}


`

const HowTo = () => {
    return (
        <How>
            <h2>How it works</h2>
                
            <p>The T-shirt designs you find here are generated through <strong><em className="emph">evolutionary algorithms</em></strong>. Each design will evolve over time and give rise to unique and previously unimagined shapes and forms. This is made possible through a simple two-step evolutionary process: </p>

            <ol>
                <li><strong><em className="emph">variation</em></strong> Every few days, each design produces a "litter" of three mutant designs. The mutant designs are similar to their parent, but not identical.</li>
                <li><strong><em className="emph">selection</em></strong> The mutant designs "feed" on your Likes <ThumbUpAltIcon/> and affection. Whichever one manages to garner the most attention in the vast wilderness of the internet will reproduce and give rise to the next generation.</li>
            </ol>

            <p>The result of this is an evolutionary lineage of ever changing "living" designs. Choose your favorites now and become a proud wearer of a momentary snapshot of evolutionary history!</p>

        </How>
    )
}

export default HowTo
