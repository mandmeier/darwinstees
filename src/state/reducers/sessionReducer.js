const reducer = (state = {ipv4: ""}, action) => {

    switch (action.type) {
        case "GET_IP":
            return {...state, ipv4: action.payload}
        default:
            return state;
    }

}

export default reducer