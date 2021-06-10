

export const addToCart = (cartItem) => async dispatch =>  {

  dispatch({type: "ADD_TO_CART", payload: cartItem}) 

}

export const increaseQty = (itemId, size, qty) => async dispatch =>  {
  dispatch({type: "INCREASE_QTY", payload: {itemId, size, qty}}) 

}


export const emptyCart = (displayedEvos, layout) => async dispatch =>  {
  dispatch({type: "EMPTY_CART"}) 
}


