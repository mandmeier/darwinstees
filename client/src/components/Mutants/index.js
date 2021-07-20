import React from 'react'
import SVG from 'react-inlinesvg'
import { MutantRow } from './MutantElements'
import { useSelector, useDispatch } from "react-redux"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import {likeMutant} from '../../state/actions/evoActions'
import Social from '../../components/Social'

const Mutants = ({lineage}) => {

    const dispatch = useDispatch();

    const evoState = useSelector((state) => state.evoState)

    var {mutants} = evoState
    mutants = mutants[lineage]

    const {visitorId} = useSelector((state) => state.sessionState)


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
                                        <p>{`${mutant.likes.length}`}</p>
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
