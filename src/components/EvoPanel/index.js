import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider'
import {Element, PanelHeader, Panel} from './EvoPanelElements'
import { useSelector, useDispatch } from "react-redux"
import { getEvos } from '../../state/actions/evoActions';
import Mutants from '../Mutants'
import PanelActions from './PanelActions'
import GenerationButtons from '../GenerationButtons';
import Countdown from '../Countdown';
import { Button } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import {addToCart} from '../../state/actions/shopActions'



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


    function capitalize(word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    

    /// get displayed evos depending on layout
    const extendedEvos = [...evos, ...evos.slice(0, Number(layout))]
    const idx = evos.length-generation
    var displayedEvos = extendedEvos.slice(idx-1 , idx-1 + Number(layout)).reverse()
 
    return (
    // <Element style={{backgroundColor: panel.color}}></Element>
    <Element>
        <div className="info">
        <div className="panel panel-left">
            <div className="title-price">
                <h2>{capitalize(lineage)}</h2>
                <h3 className="price-tag">$29.99 </h3>
            </div>
            <ImageSlider lineage={lineage} layout={layout} displayedEvos={displayedEvos}/>
            {/* <div className="add-to-cart">
                <Button variant="contained" color="primary">add to cart &nbsp;<AddShoppingCart/></Button>
            </div> */}
            <Mutants lineage={lineage}/>
        </div>
        <div className="panel panel-right">
            <div className="panel-actions  panel-transparent">
                <PanelActions displayedEvos={displayedEvos} layout={layout} lineage={lineage} generation={generation}/>
            </div>
            <div className="panel-nextgen  panel-transparent">
                <p>Next generation:</p>
                <Countdown/>
                <p className="next-gen-message"><em>Choose your favorite among the 3 mutants and share this with your friends. May the fittest design survive! </em></p>
                
            </div>
        </div>
        </div>
    
    {/* <Panel>


    <PanelHeader>
        <div className="stats">
            
        </div>
    </PanelHeader>
    
    <PanelActions displayedEvos={displayedEvos} layout={layout} lineage={lineage} generation={generation}/>
    </Panel>
    <h3 className={"outside-panel mutant-title"}>Select next generation</h3>
    <Panel style={{backgroundColor: panel.color}}>
        <Mutants lineage={lineage}/>
    </Panel> */}
    </Element>
    )
}

export default EvoPanel
