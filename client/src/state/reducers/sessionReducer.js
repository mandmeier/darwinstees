const reducer = (state = {visitorId: "", newUser: "loading"}, action) => {

    switch (action.type) {
        case "GET_VISITOR_ID":
            return {...state, visitorId: action.payload}
        case "SET_NEW_USER":
            return {...state, newUser: action.payload}
        default:
            return state;
    }

}

export default reducer