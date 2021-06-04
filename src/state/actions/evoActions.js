import * as api from '../api';


export const getEvos = (lineage) => async dispatch => {
    try {
        const { data:evos } = await api.getEvos(lineage);
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