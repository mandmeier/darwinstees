import * as api from '../api';


export const addToCart = (itemId, productId, lineage, generation, layout, evoIds, qty) => async dispatch =>  {
  try {
    const { data: product } = await api.getProduct(productId);

    const { data: design} = await api.createDesign(lineage, generation, layout, evoIds)

  // evoIds, designName, layout
  // load product and design, add to cartItem

  //  if design  does not exist create new one

  // build cartItem


    const cartItem = {
      itemId,
      product,
      design,
      qty,
    }

    dispatch({type: "ADD_TO_CART", payload: cartItem}) 
  } catch (error) {
    console.log(error);
    console.log(error.response.data);
  }
    

  //dispatch({type: "ADD_TO_CART", payload: cartItem}) 

}

export const increaseQty = (itemId, qty) => async dispatch =>  {
  dispatch({type: "INCREASE_QTY", payload: {itemId, qty}}) 

}


export const emptyCart = () => async dispatch =>  {
  dispatch({type: "EMPTY_CART"}) 
}

export const removeItem = (itemId) => async dispatch => {
  console.log("removeItem")
  console.log(itemId)
  dispatch({type: "REMOVE_ITEM", payload: itemId})
}

