import React, { useEffect } from 'react'
import SVG from 'react-inlinesvg';
import {MutantRow, MutantActions, LikeButton} from './MutantElements'
import { useSelector, useDispatch } from "react-redux"
import { getMutants } from '../../state/actions/evoActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
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

    const {ipv4} = useSelector((state) => state.sessionState)

    if (mutantsLoading) {
        <h1>loading</h1>
    }

    const getfitness = (mut) => {
        return mut.likes.length + mut.shares.length*10
    }

    const isLiked = (mut) => {
        return mut.likes.includes(ipv4) ? true : false
    }


    return (
        <>
        <MutantRow>
            {
                mutants.map((mutant, idx) => {
                    return <div className="mutant-panel" key={idx}>
                                <button className="like-button" style={isLiked(mutant) ? {backgroundColor: "#ffd700"} : {}} onClick={() => dispatch(likeMutant(mutant, ipv4, isLiked(mutant)))}>
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
        <Social page={`http://localhost:3000/${lineage}`}/>
        </>
    )
}

export default Mutants
