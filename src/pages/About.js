import React, {useLayoutEffect} from 'react'
import Layout from '../components/Layout'
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom';


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
