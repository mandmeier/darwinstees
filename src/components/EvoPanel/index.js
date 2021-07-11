import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider'
import {MUiStyles} from './EvoPanelElements'
import { useSelector, useDispatch } from "react-redux"
import { getEvos } from '../../state/actions/evoActions';
import Mutants from '../Mutants'
import PanelActions from './PanelActions'
import GenerationButtons from '../GenerationButtons';
import Countdown from '../Countdown';
import { Grid } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import {addToCart} from '../../state/actions/shopActions'
import styled from 'styled-components'

const Element = styled(Grid)`
    //background-color: #ff00ff;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 0.5rem !important;

    & .panel-transparent {
        background-color: rgba(250, 250, 255, 0.8);
        padding: 0.5rem;
        border-radius: 0.5rem;
    }

    @media (max-width: 599px) {
            max-width: 400px;
            & .panel-transparent {
            //max-width: 400px;
            }
            & .action-panel, .clock-panel {
                margin: -0.7rem 0.5rem 0 0.5rem;
                padding: 0.5rem 1.5rem;
                //background-color: #ffff00;
            }
        }

    & .row-top {
        width: 100%;
        align-items: flex-end;
        margin: 0 auto;

        & .tee-panel {
            //background-color: #ff0000;
            & .title-price{
        
                & h2 {
                    margin: 0;
                    font-family: 'Miss Fajardose', cursive;
                    font-size: 6rem;
                }
                & .price-tag {
                    margin: 0;
                    margin-top: -1rem;
                }

            }
        }


    }

    & .row-bottom {
        width: 100%;
        align-items: flex-start;
        margin: 0 auto;

        & .mutant-panel {
            //background-color: #00ff00;
            padding: 0;
        }

        & .clock-panel {
            //background-color: #00ffff;
            margin-top: 0.5rem;

            & .next-gen-message {
                font-size: 0.75rem;
                margin: 0.5rem auto;
                text-align: center;
            }
        }
    }


`


const EvoPanel = ({panel}) => {

    const classes = MUiStyles();

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
    <Grid className="row-top" container justify="center" spacing={3}>
        <Grid className="tee-panel" item xs={12} sm={7}>
            <div className="title-price">
                <h2>{capitalize(lineage)}</h2>
                <h3 className="price-tag">$29.99 </h3>
            </div>
            <ImageSlider lineage={lineage} layout={layout} displayedEvos={displayedEvos}/>
        </Grid>
        <Grid className="action-panel panel-transparent"  item xs={12} sm={5}>
                <PanelActions displayedEvos={displayedEvos} layout={layout} lineage={lineage} generation={generation}/>
        </Grid>
       </Grid>
        <Grid className="row-bottom" container justify="center" spacing={3}>
        <Grid className="mutant-panel"  item xs={12} sm={7}>
            <Mutants lineage={lineage}/>
        </Grid>
        <Grid className="clock-panel panel-transparent"  item xs={12} sm={5}>
                <p>Next generation:</p>
                <Countdown mutationTime={panel.mutationTime} lineage={panel.lineage}/>
                <p className="next-gen-message"><em>Choose your favorite among the 3 mutants and share this with your friends. May the fittest design survive! </em></p>
        </Grid>
        </Grid>
        </Element>
    )
}

export default EvoPanel
