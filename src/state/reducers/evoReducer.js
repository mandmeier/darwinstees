const reducer = (state = { current: 0, evos: [], evosLoading: true, mutants: [], mutantsLoading: true }, action) => {
    switch (action.type) {
        case "GET_EVOS":

            const generations = []
            action.payload.forEach( evo => {
                generations.push(Number(evo.name.split('-')[1]))
            })
            const latestGen = Math.max(...generations)

            return {...state,
                evosLoading: false,
                evos: action.payload,
                current: latestGen
            }
        case "GET_MUTANTS":
            return {...state,
                mutantsLoading: false,
                mutants: action.payload
            }
        case "NEXT_EVO":
            return {...state,
                current: action.payload.current === action.payload.length - 1 ? 0 : action.payload.current + 1
            }
        case "PREV_EVO":
            return {...state,
                current: action.payload.current === 0 ?  action.payload.length - 1 : action.payload.current - 1
            }
        default:
            return state;
    }
}

export default reducer;