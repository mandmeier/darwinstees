import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider'
import {Element, PanelHeader, Panel} from './EvoPanelElements'
import { useSelector, useDispatch } from "react-redux"
import { getEvos } from '../../state/actions/evoActions';
import Mutants from '../Mutants'
import PanelActions from './PanelActions'



const EvoPanel = ({panel}) => {

    const lineage = panel.lineage

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(lineage)
        dispatch(getEvos(lineage));
    }, [dispatch, lineage]);

    const evoState = useSelector((state) => state.evoState)

    var {current, evosLoading, evos, layout} = evoState
    current = current[lineage]
    evosLoading = evosLoading[lineage]
    evos = evos[lineage]
    layout = layout[lineage]

    if (evosLoading) {
        <h1>loading</h1>
    } 

    var generation = evos.length > 0 ? evos[current].name.split("-")[1].replace(/^0+/, '') : 0
    if (generation === '') {generation = 0}


    

    /// get displayed evos depending on layout
    const extendedEvos = [...evos, ...evos.slice(0, Number(layout))]
    const idx = evos.length-generation
    var displayedEvos = extendedEvos.slice(idx-1 , idx-1 + Number(layout)).reverse()

    return (
    <Element>
    <h2 className={"outside-panel"}>{lineage}</h2>
    <Panel style={{backgroundColor: panel.color}}>
    <PanelHeader>
        <div className="stats">
            <h3>Gen {generation}</h3>
            <h3>$29.99 </h3>
        </div>
    </PanelHeader>
    <ImageSlider lineage={lineage} layout={layout} displayedEvos={displayedEvos}/>
    <PanelActions displayedEvos={displayedEvos} layout={layout} lineage={lineage} generation={generation}/>
    </Panel>
    <h3 className={"outside-panel mutant-title"}>Select next generation</h3>
    <Panel style={{backgroundColor: panel.color}}>
        <Mutants lineage={lineage}/>
    </Panel>
    </Element>
    )
}

export default EvoPanel
