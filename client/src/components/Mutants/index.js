import React, { useEffect } from 'react'
import SVG from 'react-inlinesvg'
import { MutantRow } from './MutantElements'
import { useSelector, useDispatch } from "react-redux"
import { getMutants } from '../../state/actions/evoActions'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import {likeMutant} from '../../state/actions/evoActions'
import Social from '../../components/Social'

const Mutants = ({lineage}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMutants(lineage));
    }, [dispatch, lineage]);

    const evoState = useSelector((state) => state.evoState)

    var {mutants, mutantsLoading} = evoState
    mutants = mutants[lineage]
    mutantsLoading = mutantsLoading[lineage]

    const {visitorId} = useSelector((state) => state.sessionState)

    if (mutantsLoading) {
        <h1>loading</h1>
    }

    const getfitness = (mut) => {
        return mut.likes.length + mut.shares.length*10
    }


    const isLiked = (mut) => {
        return mut.likes.includes(visitorId) ? true : false
    }


    return (
        <>
        <MutantRow>
            {
                mutants.map((mutant, idx) => {
                    return <div className="mutant-panel" key={idx}>
                                <button className="like-button" style={mutant.likes.includes(visitorId) ? {backgroundColor: "#ffd700"} : {}} onClick={() => dispatch(likeMutant(mutant, visitorId, isLiked(mutant)))}>
                                    <SVG src={mutant.svg} />
                                    <div className="like-button-content">
                                        <ThumbUpAltIcon/>
                                        <p>{`${getfitness(mutant)}`}</p>
                                    </div>
                                </button>
                            </div>
                })
            } 
        </MutantRow>
        <Social page={`http://localhost:3000/shop/${lineage}`}/>
        </>
    )
}

export default Mutants
