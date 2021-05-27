const reducer = (current = 0, action) => {
    switch (action.type) {
        case "NEXT_EVO":
            return current + 1;
        case "PREV_EVO":
            return current -1;
        default:
            return current;
    }
}

export default reducer;