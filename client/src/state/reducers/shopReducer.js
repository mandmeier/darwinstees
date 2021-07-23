const reducer = (state = {cart: [], cartLoading: true, cartCookies: [], orderSuccess: false,  errorMessage: "", orderId: ""}, action) => {

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
            return {...state, cart: newCart}
        case "RESET_SHOP":
            return {...state, orderSuccess: false, errorMessage: "", orderId: ""}
        case "ORDER_ERROR":
            return {...state, orderSuccess: false, errorMessage: action.payload, orderId: ""}
        case "ORDER_SUCCESS":
            return {...state, orderSuccess: true, errorMessage: "", orderId: action.payload}
        case "EMPTY_CART":
            return {...state, cart: [], cartLoading: true, orderSuccess: false, errorMessage: ""}
        case "REMOVE_ITEM":
            var newCartRm = state.cart.filter(item => {
                return item.itemId !== action.payload;
              })
            return {...state, cart: newCartRm}
        default:
            return state;
    }

}


export default reducer