import * as api from '../api';


export const getEvos = (lineage) => async dispatch => {
    try {
        var { data:evos } = await api.getEvos(lineage);
        evos = evos.reverse()
        dispatch({type: "GET_EVOS", payload: {lineage, evos}})         
      } catch (error) {
        console.log(error);
      }

}


export const getMutants = (lineage) => async dispatch => {
    try {
        const { data: mutants } = await api.getMutants(lineage);
        dispatch({type: "GET_MUTANTS", payload: {lineage, mutants}})         
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

export const likeMutant = mutant => async dispatch => {
    try {
      const { data } = await api.likeMutant(mutant.lineage, mutant._id);
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
  