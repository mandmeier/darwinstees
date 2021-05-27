export const getEvos = () => async dispatch => {
    try {
        const evos = [
            {id: "biomorph-00001-1", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="128" x2="166" y2="160"></line>`
            },
            {id: "biomorph-00002-1", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line>`
            },
            {id: "biomorph-00003-1", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="166" y1="160" x2="166" y2="136"></line><line x1="166" y1="136" x2="150" y2="128"></line>`
            },
            {id: "biomorph-00004-2", svg: `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid" style="background: none;"><g stroke="black" stroke-width="2"><line x1="150" y1="108" x2="150" y2="128"></line><line x1="150" y1="128" x2="166" y2="160"></line><line x1="166" y1="160" x2="166" y2="136"></line><line x1="166" y1="136" x2="150" y2="128"></line><line x1="150" y1="128" x2="150" y2="124"></line><line x1="150" y1="124" x2="150" y2="124"></line></g></svg>`
            }
        ]
        dispatch({type: "GET_EVOS", payload: evos})         
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