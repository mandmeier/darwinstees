import React, { useEffect } from 'react'
import SVG from 'react-inlinesvg';
import {MutantRow} from './MutantElements'
import { useSelector, useDispatch } from "react-redux"
import { getMutants } from '../../state/actions/evoActions';


// const mutants = [
//     {id: "biomorph-00008-1", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="128" x2="166" y2="160"></line>`
//     },
//     {id: "biomorph-00008-2", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line>`
//     },
//     {id: "biomorph-00008-3", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="166" y1="160" x2="166" y2="136"></line><line x1="166" y1="136" x2="150" y2="128"></line>`}
// ]

const Mutants = ({lineage}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMutants(lineage));
    }, [dispatch, lineage]);

    const evoState = useSelector((state) => state.evoState)

    var {mutants, mutantsLoading} = evoState
    mutants = mutants[lineage]
    mutantsLoading = mutantsLoading[lineage]

    if (mutantsLoading) {
        <h1>loading</h1>
    } 

    return (
        <>
        <MutantRow>
            {
                mutants.map((mutant, idx) => {
                    return <div className="mutant-panel" key={idx}>
                        <div className="mutant-image">
                        <SVG src={mutant.svg} />
                        </div>
                        <p>LIKE</p>
                        </div>
                })
            }   
        </MutantRow>
        </>
    )
}

export default Mutants
