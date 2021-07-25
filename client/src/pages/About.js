import React, {useLayoutEffect} from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'


const Page = styled.div`

    line-height: 2rem;

    & .info {
        margin: 0 auto;
        max-width: 800px;
        //margin-top: 4rem;
        padding: 4rem 1rem;
    }

    & .panel-transparent {
        background: rgba(250, 250, 255, 0.8);
        padding: 1rem;
        border-radius: 0.3rem;
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

    & .signature {
        display: flex;
        justify-content: center;
        text-align: center;
        line-height: 0;
    }

`

const About = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <Page>
            <Layout>
                <div className="info">
                    <div className="panel-transparent">
                    <h1>About Darwin's Tees</h1>

                    <h2>The Power of Evolution</h2>

                    <p>Evolution is the process of creating new things from previous things through gradual incremental change.</p>

                    <p> What may seem like a rather simple rule is a fundamental and immensely powerful process that governs many aspects of the world we live in. </p>

                    <p> Perhaps the most famous testament to the power of evolution is the fact that all living beings on Earth are related to one another. All plants, all animals, bacteria, archaea, fungi, all microscopic and macroscopic critters, all your pets, all your friends, you and I, even the salad you had for dinner are (or were) members of the same extended family of lifeforms that grace the face of the Earth today.</p>
                        
                    <p>This in itself is remarkable, but the truly astonishing insight, as proposed by Charles Darwin, is that the vast diversity of all lifeforms known to man have arisen from a single common ancestor over billions of years of gradual incremental change.</p>

                    <h2>Everyday Evolution</h2>

                    <p>Creating a vast diversity of shapes and forms from humble beginnings is a tall order, and it may be difficult to imagine that such a feat is possible through simple laws of nature.</p>

                    <p>Indeed, if opinion polls are to be trusted, there are widespread misunderstandings about the process of evolution, even in today's information age, and many people remain unconvinced that it is real despite two centuries worth of scientific evidence.</p>

                    <p>The motivation behind Darwin's Tees is to demonstrate that <b>evolution is a an everyday process that requires nothing but a simple set of rules.</b></p>

                    <p> What better way to achieve this than to present evolution in action on an ordinary and mundane item such as a T-shirt?</p>

                    <h2>How it works</h2>

                    <p>The T-shirt designs you find here are inspired by simple yet elegant models of "digital organisms" called <i>biomorphs</i> that were originally popularized several decades ago by the evolutionary biologist Richard Dawkins.</p>

                    <p>Just like real-life organisms these digital organisms are based on a genome that encodes instructions to build a specific shape or "body" and they can reproduce and create "mutant" offspring that is similar to the parent individual, but not identical.</p>
                
                    <p> With only a few handful of genes and straightforward drawing instructions, the genetics and "embryogenesis" of our digital organisms are vastly simplified compared to even the most primitive living organisms. However, our digital organisms have all that is required to evolve through a simple two-step process: </p>
        
                    <ol>
                        <li><strong><em className="emph">variation</em></strong> Every few days, each organism produces a "litter" of three offspring organisms. The offspring are based on the genetics of their parent but they have a single random mutation in a random gene, which often (but not always) manifests in a slightly altered body plan.</li>
                        <li><strong><em className="emph">selection</em></strong> There is no evolution without selection. In our simplified universe, the mutant designs "feed" on your Likes <ThumbUpAltIcon/> and affection. Whichever individual manages to garner the most attention in the vast wilderness of the internet and collect the most likes will reproduce and give rise to the next generation.</li>
                    </ol>
    
                    <p>The result of this two-step process is an evolutionary lineage of ever changing "living" T-shirt designs. I must add that "design" is a bit of a misnomer in this context, as the shapes and forms you find here are not designed at all (I am a terrible artist) but have arisen through evolution.</p>

                    <h2>Our Mission</h2>

                    <p>At Darwin's Tees, <b>we seek to promote a scientific understanding of the world</b> by raising awareness about fundamental scientific concepts such as evolution. </p>

                    <p>The fact that you haven't left this page yet shows that you are at least curious about evolution, and we believe that you can make a real difference in the long term through a small effort on your behalf. Here are three things you can do to support our mission:</p>
                    

                    <ul>
                        <li><b>Share your curiosity with other fellow humans.</b> Talk to your family, friends and neighbors about the inspiring and awesome process of evolution. The more we talk about evolution, the more we normalize evolutionary thinking.</li>
                        <li>
                        <b>Come back here from time to time and share this page.</b> Have everybody vote for their favorite mutants. Thus each and everyone can witness first hand the gradual evolution of novel shapes and forms over weeks, months and years.
                        </li>
                        <li>
                        <b>Purchase and wear a T-shirt from our shop.</b> Our shirts may be good showpieces and conversation starters to talk about the process of evolution and by wearing them you signal to others that you care about science. Lastly, we allocate part of our proceeds to supporting educators and science communicators who do vital work towards making the world more scientifically literate.
                        </li>
                    </ul>

                    <p>Enjoy your stay and please get in touch with any ideas or suggestions!</p>

                    <br/>
                    <div className="signature">
                        <div>
                        <p><b>– Michael</b></p>
                        <small><i>Creator and Chief Evolutionary Officer</i></small>
                        </div>
                    </div>
                    <br/>
                    <div style={{marginTop:'2rem', width:'100%', display:'flex', justifyContent:'center'}}>
                    <Button component={Link} to="/" variant="contained" color="primary">
                        Back to Store
                    </Button>
                    </div>
                    <br/>
                   </div>
                </div>
            </Layout>
        </Page>
    )
}

export default About
