import * as api from '../api';



export const getEvos = () => async dispatch => {
    try {
        const { data } = await api.getEvos();
        dispatch({type: "GET_EVOS", payload: data})         
      } catch (error) {
        console.log(error);
      }

}


export const getMutants = () => async dispatch => {
    try {
        const { data } = await api.getMutants();
        dispatch({type: "GET_MUTANTS", payload: data})         
      } catch (error) {
        console.log(error);
      }

}




export const nextEvo = (current, length) => {
    return (dispatch) => {
        dispatch({
            type: "NEXT_EVO",
            payload: {current, length}
        })
    }
}

export const prevEvo = (current, length) => {
    return (dispatch) => {
        dispatch({
            type: "PREV_EVO",
            payload: {current, length}
        })
    }
}