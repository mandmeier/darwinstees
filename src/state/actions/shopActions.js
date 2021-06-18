import * as api from '../api';


export const addToCart = (itemId, lineage, generation, layout, evoIds, qty) => async dispatch =>  {
  try {

    // fetch item or create if does not exist
    const { data: item } = await api.getOrCreateItem(itemId, lineage, generation, layout, evoIds);

    const cartItem = {
      item,
      qty
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

