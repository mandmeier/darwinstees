import React, { useEffect } from 'react'
import ImageSlider from '../ImageSlider'
import {Panel} from './EvoPanelElements'
import { useSelector, useDispatch } from "react-redux"
import { getEvos } from '../../state/actions/evoActions';
import Mutants from '../Mutants'
import { ShoppingCart } from '@material-ui/icons'

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
        <div className="evo-panel-header">
            <h1>Biomorph</h1>
            <span>Add to cart <ShoppingCart/></span>
        </div>
        <h3>Generation {generation}</h3>
        <ImageSlider/>
        <Mutants/>
    </Panel>
    )
}

export default EvoPanel
