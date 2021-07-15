const reducer = (state = {ipv4: "", newUser: "loading"}, action) => {

    switch (action.type) {
        case "GET_IP":
            return {...state, ipv4: action.payload}
        case "SET_NEW_USER":
            return {...state, newUser: action.payload}
        default:
            return state;
    }

}

export default reducer