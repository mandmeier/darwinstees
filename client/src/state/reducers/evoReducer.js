const reducer = (state =
    { 
    parent: 
        {
            lineax: {name: "lineax-000000-1", lineage: "lineax", genome: [2,4,4,-2,-4,-2,0,3,3]},
            ellipticus: {name: "ellipticus-000000-1", lineage: "ellipticus", genome: [2,4,4,-2,-4,-2,0,3,3,2]},
            mandalay: {name: "mandalay-000000-1", lineage: "mandalay", genome: [2,4,4,-2,-4,-2,0,3,3,2,0,3]},
        },
    evos:
        {
            lineax: [],
            ellipticus: [],
            mandalay: [],
        },
    evosLoading:
        {
            lineax: true,
            ellipticus: true,
            mandalay: true,
        },
    current:
        {
            lineax: 0,
            ellipticus: 0,
            mandalay: 0,
        },

    mutants:
        {
            lineax: [],
            ellipticus: [],
            mandalay: [],
        },
    // mutantsLoading:
    //     {
    //         lineax: true,
    //         ellipticus: true,
    //         mandalay: true,
    //     },
    layout:
        {
            lineax: "1",
            ellipticus: "1",
            mandalay: "1",
        },
    thumbs: [
        {
        lineage: "lineax",
        generation: 0,
        svg: `<svg width="100%" height="100%" viewBox="0 0 3600 3600" preserveAspectRatio="xMidYMid" style="background: none;"></g></svg>`
        },
        {
        lineage: "ellipticus",
        generation: 0,
        svg: `<svg width="100%" height="100%" viewBox="0 0 3600 3600" preserveAspectRatio="xMidYMid" style="background: none;"></g></svg>`
        },
        {
        lineage: "mandalay",
        generation: 0,
        svg: `<svg width="100%" height="100%" viewBox="0 0 3600 3600" preserveAspectRatio="xMidYMid" style="background: none;"></g></svg>`
        }
    ]
    }, action) => {
     
    
    switch (action.type) {
        case "GET_EVOS":
            return applyGetEvos(state, action)
        // case "GET_MUTANTS":
        //     return applyGetMutants(state, action)
        case "NEXT_EVO":
            return applyNextEvo(state, action)
        case "PREV_EVO":
            return applyPrevEvo(state, action)
        case "LIKE_MUTANT":
            return applyLikeMutant(state, action)
        case "SET_LAYOUT":
            return applySetLayout(state, action)
        case "GET_THUMBS":
            return {...state, thumbs: action.payload}
        default:
            return state;
    }

    function applyGetEvos(state, action) {
        const { lineage, evos, mutants} = action.payload
        return { ...state, evos: {...state.evos, [lineage]: evos}, mutants: {...state.mutants, [lineage]: mutants}, evosLoading: {...state.evosLoading, [lineage]: false}, thumbs: {...state.thumbs, [lineage]: evos[0].svg}}
    }

    // function applyGetMutants(state, action) {
    //     const { lineage, mutants} = action.payload        
    //     return { ...state, mutants: {...state.mutants, [lineage]: mutants}, mutantsLoading: {...state.mutantsLoading, [lineage]: false}}
    // }

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

    function applySetLayout(state, action) {
        const { lineage, newLayout} = action.payload
        return { ...state, layout: {...state.layout, [lineage]: newLayout }}
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