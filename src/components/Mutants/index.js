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
import Countdown from '../Countdown'

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
                        <div className="like-score">
                            <div>{`${mutant.likes}`}</div>
                            <FlashOnIcon/></div>
                        </div>

                        <MutantActions>
                            <button onClick={() => dispatch(likeMutant(mutant))}><ThumbUpAltIcon/> +1</button>
                            <button><ShareIcon/> +10 </button>
                        </MutantActions>

                        {/* <LikeButton
                            size="small"
                            onClick={() => dispatch(likeMutant(mutant))}
                            >
                            <button><FavoriteIcon /></button>
                        </LikeButton> */}
                        </div>
                })
            }   
        </MutantRow>
        </>
    )
}

export default Mutants
