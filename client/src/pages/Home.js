import React, {useEffect, useLayoutEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import Layout from '../components/Layout'
import EvoGallery from '../components/EvoGallery'
import Introduction from '../components/Introduction'
import HowTo from '../components/HowTo'
import {getMetadata} from '../state/actions/evoActions'

const Home = ({match}) => {
    const dispatch = useDispatch();

  
    useEffect(() => {
        dispatch(getMetadata());
    }, [dispatch])

    const evoState = useSelector((state) => state.evoState)

    var {metadata} = evoState

    return (
        <div>
            <Layout>
                <Introduction/>
                {metadata === {}
                ? <div>Loading...</div>
                : <EvoGallery match={match} metadata={metadata}/>
                }
                <HowTo/>
            </Layout>
        </div>
    )
}

export default Home
