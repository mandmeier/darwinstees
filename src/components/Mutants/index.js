import React, { useEffect } from 'react'
import SVG from 'react-inlinesvg';
import {MutantRow, LikeButton} from './MutantElements'
import { useSelector, useDispatch } from "react-redux"
import { getMutants } from '../../state/actions/evoActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {likeMutant} from '../../state/actions/evoActions'


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
                        <LikeButton
                            size="small"
                            onClick={() => dispatch(likeMutant(mutant))}
                            >
                            <span className="like-score">{`${mutant.likes}`}</span>
                            <button><FavoriteIcon /></button>
                        </LikeButton>
                        </div>
                })
            }   
        </MutantRow>
        </>
    )
}

export default Mutants
