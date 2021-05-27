import React, { useEffect } from 'react'
import ImageSlider from '../ImageSlider'
import {Panel} from './EvoPanelElements'
import { useSelector, useDispatch } from "react-redux"
import { getEvos } from '../../state/actions/evoActions';

const EvoPanel = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvos());
    }, [dispatch]);

    const evoState = useSelector((state) => state.evoState)

    const {current, loading, evos} = evoState

    if (loading) {
        <h1>loading</h1>
    } 

    const generation = evos.length > 0 ? evos[current].id.split("-")[1].replace(/^0+/, '') : 0
    
    return (
    <Panel>
        <h3>Generation {generation}</h3>
        <ImageSlider/>
    </Panel>
    )
}

export default EvoPanel
