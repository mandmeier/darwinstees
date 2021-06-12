import React, { useEffect } from 'react'
import ImageSlider from '../ImageSlider'
import {Element, PanelHeader, Panel} from './EvoPanelElements'
import { useSelector, useDispatch } from "react-redux"
import { getEvos } from '../../state/actions/evoActions';
import Mutants from '../Mutants'
import PanelActions from './PanelActions'



const EvoPanel = ({panel}) => {

    const lineage = panel.lineage

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


    // useEffect(() => {
    //     dispatch(fetchProducts())
    //     dispatch(fetchCart())
    // }, [])

    // const shopState = useSelector((state) => state.shopState)
    // const {products, productsLoading, cart, cartLoading} = shopState

    // if (cartLoading === false) {
    //     const product = products.find(x => x.name === 'T-shirt');
    // }

    const layout = "7"


    /// get displayed evos
    const wrapslice = (arr, start, en)  => {
        //start < 0 
        let end = en > arr.length ? en - arr.length : en
        return end < start 
        ? arr.slice(start).concat(arr.slice(0, end))
        : arr.slice(start, end)
    }
    const start = (evos.length-1)-generation
    const end = start + Number(layout)
    const displayedEvos = wrapslice(evos, start, end)

    



    // const currentEvoIndex = (evos.length-1)-generation
    // const displayedEvos = evos.slice(currentEvoIndex, currentEvoIndex+layout)

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
        
        <ImageSlider lineage={lineage}/>
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
