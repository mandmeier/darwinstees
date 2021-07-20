import * as api from '../api'



export const getEvos = (lineage) => async dispatch => {
    try {
        const { data } = await api.getEvos(lineage);
        var { evos, mutants } = data
        evos = evos.reverse()
        dispatch({type: "GET_EVOS", payload: {lineage, evos, mutants}})         
      } catch (error) {
        console.log(error);
      }

}


export const getThumbs = () => async dispatch => {
  try {
      const { data: thumbs } = await api.getThumbs();
      dispatch({type: "GET_THUMBS", payload: thumbs})         
    } catch (error) {
      console.log(error);
    }

}


export const nextEvo = (lineage, current, length) => {
    return (dispatch) => {
        dispatch({
            type: "NEXT_EVO",
            payload: {lineage, current, length}
        })
    }
}

export const prevEvo = (lineage, current, length) => {
    return (dispatch) => {
        dispatch({
            type: "PREV_EVO",
            payload: {lineage, current, length}
        })
    }
}

export const likeMutant = (mutant, visitorId, isLiked) => async dispatch => {
    try {
      const { data } = await api.likeMutant(mutant.lineage, mutant._id, visitorId, isLiked);
      dispatch({ type: 'LIKE_MUTANT', payload: data });
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
    }
  };


export const setLayout = (lineage, newLayout) => async dispatch => {
  try {
    dispatch({ type: 'SET_LAYOUT', payload: {lineage, newLayout} });
  } catch (error) {
    console.log(error);
    console.log(error.response.data);
  }
}
  