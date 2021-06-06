const reducer = (state =
    { 
    parent: 
        {
            biomorph: {name: "biomorph-000000-1", lineage: "biomorph", genome: [2,4,4,-2,-4,-2,0,3,3]},
            ellimorph: {name: "ellimorph-000000-1", lineage: "ellimorph", genome: [2,4,4,-2,-4,-2,0,3,3,2]},
            mandamorph: {name: "mandamorph-000000-1", lineage: "mandamorph", genome: [2,4,4,-2,-4,-2,0,3,3,2,0,3]},
        },
    evos:
        {
            biomorph: [],
            ellimorph: [],
            mandamorph: [],
        },
    evosLoading:
        {
            biomorph: true,
            ellimorph: true,
            mandamorph: true,
        },
    current:
        {
            biomorph: 0,
            ellimorph: 0,
            mandamorph: 0,
        },

    mutants:
        {
            biomorph: [],
            ellimorph: [],
            mandamorph: [],
        },
    mutantsLoading:
        {
            biomorph: true,
            ellimorph: true,
            mandamorph: true,
        }
    }, action) => {
     
    
    switch (action.type) {
        case "GET_EVOS":
            return applyGetEvos(state, action)
        case "GET_MUTANTS":
            return applyGetMutants(state, action)
        case "NEXT_EVO":
            return applyNextEvo(state, action)
        case "PREV_EVO":
            return applyPrevEvo(state, action)
        case "LIKE_MUTANT":
            return applyLikeMutant(state, action)
        default:
            return state;
    }

    function applyGetEvos(state, action) {
        const { lineage, evos} = action.payload
        return { ...state, evos: {...state.evos, [lineage]: evos}, evosLoading: {...state.evosLoading, [lineage]: false}}
    }

    function applyGetMutants(state, action) {
        const { lineage, mutants} = action.payload        
        return { ...state, mutants: {...state.mutants, [lineage]: mutants}, mutantsLoading: {...state.mutantsLoading, [lineage]: false}}
    }

    function applyNextEvo(state, action) {
        const { lineage, current, length} = action.payload
        return { ...state, current: {...state.current, [lineage]: current === 0 ? length - 1 : current - 1 }}
    }

    function applyPrevEvo(state, action) {
        const { lineage, current, length} = action.payload
        return { ...state, current: {...state.current, [lineage]: current === length - 1 ? 0 : current + 1 }}
    }

    function applyLikeMutant(state, action) {
        const data = action.payload
        const mutants =  state.mutants[data.lineage]
        const newMutants = mutants.map(m => m._id === data._id ? {...m, likes : data.likes} : m);
        return { ...state, mutants: {...state.mutants, [data.lineage]: newMutants}, }
    }   
        
}
            
       
export default reducer






// const reducer = (state = { current: 0, evos: [], evosLoading: true, mutants: [], mutantsLoading: true }, action) => {
//     switch (action.type) {
//         case "GET_EVOS":

//             const generations = []
//             action.payload.forEach( evo => {
//                 generations.push(Number(evo.name.split('-')[1]))
//             })
//             const latestGen = Math.max(...generations)

//             return {...state,
//                 evosLoading: false,
//                 evos: action.payload,
//                 current: latestGen
//             }
//         case "GET_MUTANTS":
//             return {...state,
//                 mutantsLoading: false,
//                 mutants: action.payload
//             }
//         case "NEXT_EVO":
//             return {...state,
//                 current: action.payload.current === action.payload.length - 1 ? 0 : action.payload.current + 1
//             }
//         case "PREV_EVO":
//             return {...state,
//                 current: action.payload.current === 0 ?  action.payload.length - 1 : action.payload.current - 1
//             }
//         default:
//             return state;
//     }
// }

// export default reducer;