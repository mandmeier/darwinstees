const reducer = (state = {cart: [], cartLoading: true, cartCookies: [], confirmationNumber: ""}, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, action.payload]}
        case "UPDATE_QTY":
            const {itemId, qty} = action.payload
            let updatedItem = state.cart.find(item => item.itemId === itemId)
            let idx = state.cart.findIndex(item => item.itemId === itemId)
            updatedItem = {...updatedItem, qty: qty}
            var newCart = [...state.cart];
            newCart.splice(idx, 1, updatedItem);
            return{...state, cart: newCart}
        // case "INCREASE_QTY":
        //     const {itemId, qty} = action.payload
        //     let updatedItem = state.cart.find(item => item.itemId === itemId)
        //     let idx = state.cart.findIndex(item => item.itemId === itemId)
        //     updatedItem = {...updatedItem, qty: updatedItem.qty + qty}
        //     var newCart = [...state.cart];
        //     newCart.splice(idx, 1, updatedItem);
        //     return{...state, cart: newCart}
        case "EMPTY_CART":
            return {...state, cart: [], confirmationNumber: ""}
        case "REMOVE_ITEM":
            var newCartRm = state.cart.filter(item => {
                return item.itemId !== action.payload;
              })
            return {...state, cart: newCartRm}
        case "CONFIRM_ORDER":
            return {...state, confirmationNumber: action.payload}
        default:
            return state;
    }

}


export default reducer