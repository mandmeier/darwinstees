import React, { useEffect } from 'react'
import ImageSlider from '../ImageSlider'
import {Panel} from './EvoPanelElements'
import { useSelector, useDispatch } from "react-redux"
import { getEvos } from '../../state/actions/evoActions';
import Mutants from '../Mutants'
import { ShoppingCart } from '@material-ui/icons'

const EvoPanel = ({lineage}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvos(lineage));
    }, [dispatch, lineage]);

    const evoState = useSelector((state) => state.evoState)

    var {current, evosLoading, evos} = evoState
    current = current[lineage]
    evosLoading = evosLoading[lineage]
    evos = evos[lineage]

    if (evosLoading) {
        <h1>loading</h1>
    } 

    var generation = evos.length > 0 ? evos[current].name.split("-")[1].replace(/^0+/, '') : 0
    if (generation === '') {generation = 0}


    return (
    <Panel>
        <div className="evo-panel-header">
            <h1>{lineage}</h1>
            <span>Add to cart <ShoppingCart/></span>
        </div>
        <h3>Generation {generation}</h3>
        <ImageSlider lineage={lineage}/>
        <Mutants lineage={lineage}/>
    </Panel>
    )
}

export default EvoPanel
