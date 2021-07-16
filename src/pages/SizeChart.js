import React, {useLayoutEffect} from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import size_chart from '../assets/size_chart.webp'


const Page = styled.div`
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

    & .size-img {
        width: 100%;
        margin-right: 1rem;
    }

`

const SizeChart = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <Page>
            <Layout>
                <div className="info">
                    <div className="panel-transparent">
                    <h1>T-shirt Size Chart</h1>
                    <div style={{marginTop:'2rem', width:'100%', display:'flex', justifyContent:'center'}}>
                        <img  className="size-img" src={size_chart} alt="T-shirt size chart"/>
                    </div>
                </div>
                </div>
            </Layout>
        </Page>
    )
}

export default SizeChart
