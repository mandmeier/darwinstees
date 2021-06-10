const reducer = (state = {cart: [], cartLoading: true}, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Item added to cart")
            return {...state, cart: [...state.cart, action.payload]}
        case "INCREASE_QTY":
            const {itemId, size, qty} = action.payload
            let updatedItem = state.cart.find(item => item.itemId === itemId)
            let idx = state.cart.findIndex(item => item.itemId === itemId)
            updatedItem = {...updatedItem, qty: {...updatedItem.qty, [size] : updatedItem.qty[size] + qty}}
            var newCart = [...state.cart];
            newCart.splice(idx, 1, updatedItem);
            return{...state, cart: newCart}
                
        case "EMPTY_CART":
            return {...state, cart: []}
        default:
            return state;
    }

}


export default reducer