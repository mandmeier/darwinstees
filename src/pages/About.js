import React, {useLayoutEffect} from 'react'
import Layout from '../components/Layout'

const About = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <Layout>
            <h1>About Darwin's Tees</h1>
        </Layout>
    )
}

export default About
